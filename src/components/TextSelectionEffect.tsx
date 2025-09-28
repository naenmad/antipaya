'use client';

import { useEffect } from 'react';

export default function TextSelectionEffect() {
    useEffect(() => {
        let selectionTimeout: NodeJS.Timeout;
        const clearedElements = new Set<HTMLElement>();

        const clearHighlightedElements = () => {
            clearedElements.forEach((el) => el.classList.remove('selection-clear'));
            clearedElements.clear();
        };

        const applySelectionClear = (element: HTMLElement | null) => {
            if (!element || clearedElements.has(element)) return;

            element.classList.add('selection-clear');
            clearedElements.add(element);
        };

        const markElementTree = (element: HTMLElement | null) => {
            if (!element) return;

            const stack: HTMLElement[] = [element];

            while (stack.length > 0) {
                const current = stack.pop();
                if (!current) continue;

                applySelectionClear(current);

                const childElements = Array.from(current.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
                stack.push(...childElements);
            }
        };

        const markAncestors = (element: HTMLElement | null) => {
            let current = element;

            while (current && current !== document.documentElement) {
                applySelectionClear(current);

                if (current === document.body) {
                    break;
                }

                current = current.parentElement;
            }
        };

        const trackNode = (node: Node | null) => {
            if (!node) return;

            if (node.nodeType === Node.TEXT_NODE) {
                const parent = node.parentElement;
                markElementTree(parent);
                markAncestors(parent?.parentElement ?? null);
            } else if (node instanceof HTMLElement) {
                markElementTree(node);
                markAncestors(node.parentElement);
            }
        };

        const markRangeElements = (range: Range) => {
            const rootCandidate = range.commonAncestorContainer;
            const walkerRoot = (rootCandidate.nodeType === Node.ELEMENT_NODE
                ? rootCandidate
                : rootCandidate.parentElement) ?? document.body;

            if (walkerRoot instanceof HTMLElement) {
                markElementTree(walkerRoot);
                markAncestors(walkerRoot.parentElement);
            }

            const walker = document.createTreeWalker(
                walkerRoot,
                NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
                {
                    acceptNode(node) {
                        try {
                            return range.intersectsNode(node)
                                ? NodeFilter.FILTER_ACCEPT
                                : NodeFilter.FILTER_SKIP;
                        } catch {
                            return NodeFilter.FILTER_SKIP;
                        }
                    },
                },
            );

            trackNode(range.startContainer);
            trackNode(range.endContainer);

            let current = walker.nextNode();
            while (current) {
                trackNode(current);
                current = walker.nextNode();
            }
        };

        const formatSelectionHtml = (selection: Selection) => {
            const container = document.createElement('div');

            for (let i = 0; i < selection.rangeCount; i += 1) {
                const fragment = selection.getRangeAt(i).cloneContents();
                container.appendChild(fragment);
            }

            return container.innerHTML;
        };

        const handleCopy = (event: ClipboardEvent) => {
            const selection = window.getSelection();

            if (!selection || selection.rangeCount === 0) {
                return;
            }

            const selectedText = selection.toString();
            if (!selectedText.trim()) {
                return;
            }

            const clipboardData = event.clipboardData;
            if (!clipboardData) {
                return;
            }

            const rootStyles = getComputedStyle(document.documentElement);
            const foreground = rootStyles.getPropertyValue('--foreground').trim() || '#010203';
            const background = rootStyles.getPropertyValue('--background').trim() || '#f8f8ff';
            const primary = rootStyles.getPropertyValue('--primary').trim() || '#007BFF';
            const accent = rootStyles.getPropertyValue('--accent').trim() || '#00BFFF';
            const secondary = rootStyles.getPropertyValue('--secondary').trim() || '#0056B3';
            const fontFamily = rootStyles.getPropertyValue('--font-geist-sans').trim()
                || 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

            const originUrl = window.location.href;
            const brandTitle = 'Antipaya';
            const brandTagline = 'Build with soul. Scale with clarity.';

            const textAttribution = [`— Copied from ${brandTitle}`, brandTagline, originUrl].join('\n');
            const textPayload = `${selectedText}\n\n${textAttribution}`;

            const selectionHtml = formatSelectionHtml(selection);

            const htmlAttribution = `
                <div style="margin-top:16px;padding:16px;border-radius:16px;background:linear-gradient(135deg, ${background} 0%, ${background} 40%, ${accent}14 100%);border:1px solid ${primary}33;color:${foreground};font-family:${fontFamily};">
                    <div style="font-size:12px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:${secondary};">${brandTitle}</div>
                    <div style="margin-top:8px;font-size:18px;font-weight:600;line-height:1.4;">${brandTagline}</div>
                    <a href="${originUrl}" style="display:inline-block;margin-top:12px;padding:8px 14px;border-radius:999px;background:${primary};color:${background};text-decoration:none;font-weight:600;">Visit Antipaya</a>
                </div>
            `;

            const htmlPayload = `
                <div style="font-family:${fontFamily}; color:${foreground};">
                    ${selectionHtml}
                    <div style="margin:20px 0;border-top:1px solid ${primary}22;"></div>
                    ${htmlAttribution}
                </div>
            `;

            clipboardData.setData('text/plain', textPayload);
            clipboardData.setData('text/html', htmlPayload);

            event.preventDefault();
        };

        const handleSelectionChange = () => {
            const selection = window.getSelection();
            const hasSelection = selection && selection.toString().length > 0;

            if (selectionTimeout) {
                clearTimeout(selectionTimeout);
            }

            clearHighlightedElements();

            if (hasSelection && selection) {
                document.body.classList.add('selecting');

                for (let i = 0; i < selection.rangeCount; i += 1) {
                    const range = selection.getRangeAt(i);
                    if (!range.collapsed) {
                        markRangeElements(range);
                    }
                }
            } else {
                selectionTimeout = setTimeout(() => {
                    document.body.classList.remove('selecting');
                    clearHighlightedElements();
                }, 100);
            }
        };

        document.addEventListener('selectionchange', handleSelectionChange);

        const handleMouseUp = () => {
            setTimeout(handleSelectionChange, 10);
        };

        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('keyup', handleSelectionChange);
        document.addEventListener('copy', handleCopy);

        return () => {
            document.removeEventListener('selectionchange', handleSelectionChange);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('keyup', handleSelectionChange);
            document.removeEventListener('copy', handleCopy);

            if (selectionTimeout) {
                clearTimeout(selectionTimeout);
            }

            clearHighlightedElements();
            document.body.classList.remove('selecting');
        };
    }, []);

    return null; // This component doesn't render anything
}
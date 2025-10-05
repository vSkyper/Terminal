/**
 * Utility class for DOM manipulation and element management
 */
export class DOMManager {
  private static instance: DOMManager;

  private constructor() {}

  public static getInstance(): DOMManager {
    if (!DOMManager.instance) {
      DOMManager.instance = new DOMManager();
    }
    return DOMManager.instance;
  }

  /**
   * Safely get an element by ID with type assertion
   */
  public getElementById<T extends HTMLElement>(id: string): T | null {
    return document.getElementById(id) as T | null;
  }

  /**
   * Safely get an element by query selector with type assertion
   */
  public querySelector<T extends Element>(selector: string): T | null {
    return document.querySelector(selector) as T | null;
  }

  /**
   * Safely get elements by query selector all with type assertion
   */
  public querySelectorAll<T extends Element>(selector: string): NodeListOf<T> {
    return document.querySelectorAll(selector) as NodeListOf<T>;
  }

  /**
   * Add event listener with proper typing and error handling
   */
  public addEventListener<T extends HTMLElement>(
    element: T | null,
    event: string,
    handler: EventListener,
    options?: AddEventListenerOptions
  ): boolean {
    if (!element) {
      console.warn(`Cannot add event listener: element is null`);
      return false;
    }

    try {
      element.addEventListener(event, handler, options);
      return true;
    } catch (error) {
      console.error(`Error adding event listener:`, error);
      return false;
    }
  }

  /**
   * Remove event listener safely
   */
  public removeEventListener<T extends HTMLElement>(
    element: T | null,
    event: string,
    handler: EventListener,
    options?: EventListenerOptions
  ): boolean {
    if (!element) {
      console.warn(`Cannot remove event listener: element is null`);
      return false;
    }

    try {
      element.removeEventListener(event, handler, options);
      return true;
    } catch (error) {
      console.error(`Error removing event listener:`, error);
      return false;
    }
  }

  /**
   * Set element visibility
   */
  public setVisibility(
    element: HTMLElement | null,
    visible: boolean,
    displayValue: string = 'block'
  ): boolean {
    if (!element) {
      console.warn(`Cannot set visibility: element is null`);
      return false;
    }

    element.style.display = visible ? displayValue : 'none';
    return true;
  }

  /**
   * Toggle element visibility
   */
  public toggleVisibility(element: HTMLElement | null): boolean {
    if (!element) {
      console.warn(`Cannot toggle visibility: element is null`);
      return false;
    }

    const isVisible = element.style.display !== 'none';
    element.style.display = isVisible ? 'none' : 'block';
    return true;
  }

  /**
   * Scroll element to bottom
   */
  public scrollToBottom(element: HTMLElement | null): boolean {
    if (!element) {
      console.warn(`Cannot scroll: element is null`);
      return false;
    }

    element.scrollTo(0, element.scrollHeight);
    return true;
  }

  /**
   * Clear element content
   */
  public clearContent(element: HTMLElement | null): boolean {
    if (!element) {
      console.warn(`Cannot clear content: element is null`);
      return false;
    }

    element.innerHTML = '';
    return true;
  }

  /**
   * Set element content safely
   */
  public setContent(element: HTMLElement | null, content: string): boolean {
    if (!element) {
      console.warn(`Cannot set content: element is null`);
      return false;
    }

    element.innerHTML = content;
    return true;
  }

  /**
   * Focus element safely
   */
  public focusElement<T extends HTMLElement>(element: T | null): boolean {
    if (!element) {
      console.warn(`Cannot focus: element is null`);
      return false;
    }

    try {
      element.focus();
      return true;
    } catch (error) {
      console.error(`Error focusing element:`, error);
      return false;
    }
  }
}

// eslint-disable-next-line no-use-before-define
type Content = string | ContentElement | ContentElement[];

export interface ContentElement {
  id: number;
  type: 'paragraph' | 'link';
  content: Content;
  href?: string;
}

export function addElement(element: ContentElement) {
  function formatContent(content: Content) {
    if (Array.isArray(content)) {
      return content.map(item => addElement(item));
    }

    return content as string;
  }

  if (element.type === 'paragraph') {
    return <p key={element.id}>{formatContent(element.content)}</p>;
  }

  if (element.type === 'link') {
    return (
      <a key={element.id} href={element.href}>
        {formatContent(element.content)}
      </a>
    );
  }

  return null;
}

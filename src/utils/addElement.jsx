export function addElement(element) {
  function formatContent(content) {
    if (Array.isArray(content)) {
      return content.map(item => addElement(item));
    }

    return content;
  }

  if (element.type === 'paragraph') {
    return <p key={Math.random()}>{formatContent(element.content)}</p>;
  }

  if (element.type === 'link') {
    return (
      <a key={Math.random()} href={element.href}>
        {formatContent(element.content)}
      </a>
    );
  }

  return null;
}
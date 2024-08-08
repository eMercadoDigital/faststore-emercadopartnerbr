
export interface Novo {
  title: string;
  link: {
    text: string;
    url: string;
  };
}

export default function Novo(props: Novo) {
  return (
    <section>
      <h2>{props.title}</h2>
      <a href={props.link.url}>{props.link.text}</a>
    </section>
  );
}
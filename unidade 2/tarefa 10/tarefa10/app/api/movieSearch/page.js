import Form from "next/form";

export default async function MovieForm() {
  return (
    <Form action="/movies">
      <div>
        <label htmlFor="idTitleSearchKey">Título</label>
        <input
          id="idTitleSearchKey"
          name="titleSearchKey"
          type="text"
          placeholder="Digite o título do filme"
        />
      </div>

      <div>
        <label htmlFor="idYearSearchKey">Ano</label>
        <input
          id="idYearSearchKey"
          name="yearSearchKey"
          type="number"
          placeholder="Digite o ano (ex.: 2000)"
        />
      </div>

      <button type="submit">Pesquisar</button>
    </Form>
  );
}
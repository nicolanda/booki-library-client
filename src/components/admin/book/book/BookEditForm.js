import React, { useState } from 'react';
import {
  useGetAllAuthorsQuery,
  useGetAllCategoriesQuery,
  useGetAllDiscountsQuery,
  useGetAllTaxesQuery
} from '../../../../services/api/books/BookiApi';
import {
  errorMessage,
  regularExpression
} from '../../../../utilities/validators';
import { FormInputText } from '../../../forms/FormInputText';
import { DropInput } from './DropInput';
import { DropManyInputs } from './DropManyInputs';

export const BookEditForm = ({ data }) => {
  // crud request
  const { data: authrosData, isLoading: loadAu } =
    useGetAllAuthorsQuery();
  const { data: categoryData, isLoading: loadC } =
    useGetAllCategoriesQuery();
  const { data: discountData, isLoading: loadDisc } =
    useGetAllDiscountsQuery();
  const { data: taxesData, isLoading: loadTax } =
    useGetAllTaxesQuery();
  // variable declaration
  const [authors, setAuthors] = useState(data.authors);
  const [category, setCategory] = useState(data.categories);
  const [discount, setDiscount] = useState(data.price_discount);
  const [tax, setTax] = useState(data.price_tax);
  const [title, setTitle] = useState({
    field: data.title,
    err: null
  });
  const [isbn, setIsbn] = useState({ field: data.isbn, err: null });
  const [editorial, setEditorial] = useState({
    field: data.editorial,
    err: null
  });
  const [imgUrl, setImgUrl] = useState({
    field: data.imgUrl,
    err: null
  });
  const [language, setLanguage] = useState({
    field: data.language,
    err: null
  });
  const [price, setPrice] = useState({
    field: data.price,
    err: null
  });
  const [edition, setEdition] = useState({
    field: data.edition,
    err: null
  });
  const [pages, setPages] = useState({
    field: data.pages,
    err: null
  });
  const [format, setFormat] = useState({
    field: data.format,
    err: null
  });
  const [details, setDetails] = useState(data.details);

  //console.log({ title, category, discount, tax });

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (
    //   title.err === !1 &&
    //   isbn.err === !1 &&
    //   editorial.err === !1 &&
    //   imgUrl.err === !1 &&
    //   language.err === !1 &&
    //   price.err === !1 &&
    //   edition.err === !1 &&
    //   pages.err === !1 &&
    //   format.err === !1
    // ) {
    //   const authorsId = authors.map((a) => a.id);
    //   const categoryId = category.map((c) => c.id);
    //   const book = {
    //     title: title.field,
    //     isbn: isbn.field,
    //     price: Number(price.field),
    //     imgUrl: imgUrl.field,
    //     details: details,
    //     language: language.field,
    //     edition: edition.field,
    //     editorial: editorial.field,
    //     pages: Number(pages.field),
    //     format: format.field,
    //     priceTaxId: tax.id,
    //     priceDiscountId: discount.id,
    //     categoryIds: categoryId,
    //     authorIds: authorsId
    //   };
    //   //createBook(book);

    //   setTitle({ field: '', err: null });
    //   setIsbn({ field: '', err: null });
    //   setEditorial({ field: '', err: null });
    //   setImgUrl({ field: '', err: null });
    //   setLanguage({ field: '', err: null });
    //   setPrice({ field: '', err: null });
    //   setEdition({ field: '', err: null });
    //   setPages({ field: '', err: null });
    //   setFormat({ field: '', err: null });
    //   setDetails('');
    //   setAuthors([]);
    //   setCategory([]);
    //   setDiscount([]);
    //   setTax([]);
    // } else {
    //   console.log('error');
    // }

    const authorsId = authors.map((a) => a.id);
    const categoryId = category.map((c) => c.id);
    const book = {
      title: title.field,
      isbn: isbn.field,
      price: Number(price.field),
      imgUrl: imgUrl.field,
      details: details,
      language: language.field,
      edition: edition.field,
      editorial: editorial.field,
      pages: Number(pages.field),
      format: format.field,
      priceTaxId: tax.id,
      priceDiscountId: discount.id,
      categoryIds: categoryId,
      authorIds: authorsId
    };
    // console.log('submit');
    console.log(book);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInputText
          id="title"
          state={title}
          setState={setTitle}
          label="titulo del libro"
          variant="standard"
          size="small"
          txtError={errorMessage.lowercase}
          reg={regularExpression.lowerCase}
          req={true}
        />
        <br />
        <FormInputText
          id="Isbn"
          state={isbn}
          setState={setIsbn}
          label="ISBN del libro"
          variant="standard"
          size="small"
          txtError={errorMessage.onlyNumbers}
          reg={regularExpression.onlyNumbers}
          req={true}
        />
        <br />
        <FormInputText
          id="editorial"
          state={editorial}
          setState={setEditorial}
          label="Editorial del libro"
          variant="standard"
          size="small"
          txtError={errorMessage.lowercase}
          reg={regularExpression.lowerCase}
          req={true}
        />
        <br />
        <FormInputText
          id="imgUrl"
          state={imgUrl}
          setState={setImgUrl}
          label="url del libro"
          txtError={errorMessage.img_url}
          reg={regularExpression.img_url}
          variant="standard"
          size="small"
          req={true}
        />
        <br />
        <div>
          <h4>descripcion</h4>
          <textarea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>

        <br />
        <FormInputText
          id="language"
          state={language}
          setState={setLanguage}
          label="Lenguaje del libro"
          variant="standard"
          size="small"
          txtError={errorMessage.lowercase}
          reg={regularExpression.lowercase}
          req={true}
        />

        <br />
        <FormInputText
          id="price"
          state={price}
          setState={setPrice}
          label="Precio del libro"
          variant="standard"
          size="small"
          txtError={errorMessage.onlyNumbers}
          reg={regularExpression.onlyNumbers}
          req={true}
        />

        <br />
        <FormInputText
          id="edition"
          state={edition}
          setState={setEdition}
          label="Edición del libro"
          variant="standard"
          size="small"
          txtError={errorMessage.lettersandnumbers}
          reg={regularExpression.lettersandnumbers}
          req={true}
        />

        <br />
        <FormInputText
          id="pages"
          state={pages}
          setState={setPages}
          label="Paginas del libro"
          variant="standard"
          size="small"
          txtError={errorMessage.onlyNumbers}
          reg={regularExpression.onlyNumbers}
          req={true}
        />

        <br />
        <FormInputText
          id="format"
          state={format}
          setState={setFormat}
          label="Formato del libro"
          variant="standard"
          size="small"
          txtError={errorMessage.lowercase}
          reg={regularExpression.lowercase}
          req={true}
        />
        <DropManyInputs
          state={authors}
          label="Autores"
          setState={setAuthors}
          data={authrosData}
          loading={loadAu}
        />

        <DropManyInputs
          state={category}
          label="Categoria"
          setState={setCategory}
          data={categoryData}
          loading={loadC}
        />

        <DropInput
          state={discount}
          label="Descuento"
          setState={setDiscount}
          data={discountData}
          loading={loadDisc}
        />

        <DropInput
          state={tax}
          label="Impuesto"
          setState={setTax}
          data={taxesData}
          loading={loadTax}
        />
        <button>
          <span>Actualizar</span>
        </button>
      </form>
      <div>
        <div>
          <p>&#x2705;</p>
        </div>
      </div>
    </div>
  );
};

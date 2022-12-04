import React, { useState } from 'react';
import {
  useGetAllAuthorsQuery,
  useGetAllCategoriesQuery,
  useGetAllDiscountsQuery,
  useGetAllTaxesQuery,
  useUpdateBookMutation
} from '../../../../services/api/books/BookiApi';
import {
  errorMessage,
  regularExpression
} from '../../../../utilities/validators';
import { FormInputText } from '../../../forms/FormInputText';
import { DropInput } from './DropInput';
import { DropManyInputs } from './DropManyInputs';

export const BookEditForm = ({ data }) => {
  const [updateBook] = useUpdateBookMutation();
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
  const [authorsForm, setAuthorsForm] = useState(data.authors);
  const [categoryForm, setCategoryForm] = useState(data.categories);
  const [discountForm, setDiscountForm] = useState(
    data.price_discount
  );
  const [taxForm, setTaxForm] = useState(data.price_tax);
  const [titleForm, setTitleForm] = useState({
    field: data.title,
    err: null
  });
  const [isbnForm, setIsbnForm] = useState({
    field: data.isbn,
    err: null
  });
  const [editorial, setEditorial] = useState({
    field: data.editorial,
    err: null
  });
  const [imgUrlForm, setImgUrlForm] = useState({
    field: data.imgUrl,
    err: null
  });
  const [languageForm, setLanguageForm] = useState({
    field: data.language,
    err: null
  });
  const [priceForm, setPriceForm] = useState({
    field: data.price,
    err: null
  });
  const [editionForm, setEditionForm] = useState({
    field: data.edition,
    err: null
  });
  const [pagesForm, setPagesForm] = useState({
    field: data.pages,
    err: null
  });
  const [formatForm, setFormatForm] = useState({
    field: data.format,
    err: null
  });
  const [detailsForm, setDetailsForm] = useState(data.details);

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

    const authorsId = authorsForm.map((a) => a.id);
    const categoryId = categoryForm.map((c) => c.id);
    const book = {
      id: data.id,
      title: titleForm.field,
      isbn: isbnForm.field,
      price: Number(priceForm.field),
      imgUrl: imgUrlForm.field,
      details: detailsForm,
      language: languageForm.field,
      edition: editionForm.field,
      editorial: editorial.field,
      pages: Number(pagesForm.field),
      format: formatForm.field,
      priceTaxId: taxForm.id,
      priceDiscountId: discountForm.id,
      categoryIds: categoryId,
      authorIds: authorsId
    };
    // console.log('submit');
    // console.log(book);
    updateBook(book);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInputText
          id="title"
          state={titleForm}
          setState={setTitleForm}
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
          state={isbnForm}
          setState={setIsbnForm}
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
          state={imgUrlForm}
          setState={setImgUrlForm}
          label="url del libro"
          txtError={errorMessage.img_url}
          reg={regularExpression.img_url}
          variant="standard"
          size="small"
          req={true}
        />
        <br />
        <div>
          <textarea
            id="details"
            value={detailsForm}
            onChange={(e) => setDetailsForm(e.target.value)}
            placeholder="descripcion del libro"
            rows="6"
            cols="45"
          />
        </div>

        <br />
        <FormInputText
          id="language"
          state={languageForm}
          setState={setLanguageForm}
          label="Lenguaje del libro"
          variant="standard"
          size="small"
          txtError={errorMessage.lowercase}
          reg={regularExpression.lowerCase}
          req={true}
        />

        <br />
        <FormInputText
          id="price"
          state={priceForm}
          setState={setPriceForm}
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
          state={editionForm}
          setState={setEditionForm}
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
          state={pagesForm}
          setState={setPagesForm}
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
          state={formatForm}
          setState={setFormatForm}
          label="Formato del libro"
          variant="standard"
          size="small"
          txtError={errorMessage.lowercase}
          reg={regularExpression.lowerCase}
          req={true}
        />
        <DropManyInputs
          state={authorsForm}
          label="Autores"
          setState={setAuthorsForm}
          data={authrosData}
          loading={loadAu}
        />

        <DropManyInputs
          state={categoryForm}
          label="Categoria"
          setState={setCategoryForm}
          data={categoryData}
          loading={loadC}
        />

        <DropInput
          state={discountForm}
          label="Descuento"
          setState={setDiscountForm}
          data={discountData}
          loading={loadDisc}
        />

        <DropInput
          state={taxForm}
          label="Impuesto"
          setState={setTaxForm}
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

import React, { useState } from 'react';
import {
  useCreateBookMutation,
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

export const BookAddForm = () => {
  // crud request
  const [createBook, { isSuccess }] = useCreateBookMutation();
  const { data: authorsData, isLoading: loadAu } =
    useGetAllAuthorsQuery();
  const { data: categoryData, isLoading: loadC } =
    useGetAllCategoriesQuery();
  const { data: discountData, isLoading: loadDisc } =
    useGetAllDiscountsQuery();
  const { data: taxesData, isLoading: loadTax } =
    useGetAllTaxesQuery();

  // variable declaration
  const [titleForm, setTitleForm] = useState({
    field: '',
    err: null
  });
  const [isbnForm, setIsbnForm] = useState({ field: '', err: null });
  const [editorialForm, setEditorialForm] = useState({
    field: '',
    err: null
  });
  const [priceForm, setPriceForm] = useState({
    field: '',
    err: null
  });
  const [imgUrlForm, setImgUrlForm] = useState({
    field: '',
    err: null
  });
  const [languageForm, setLanguageForm] = useState({
    field: '',
    err: null
  });
  const [editionForm, setEditionForm] = useState({
    field: '',
    err: null
  });
  const [pagesForm, setPagesForm] = useState({
    field: '',
    err: null
  });
  const [formatForm, setFormatForm] = useState({
    field: '',
    err: null
  });
  const [detailsForm, setDetailsForm] = useState('');
  const [categoryForm, setCategoryForm] = useState([]);
  const [discountForm, setDiscountForm] = useState([]);
  const [taxForm, setTaxForm] = useState([]);
  const [authorsForm, setAuthorsForm] = useState([]);

  //console.log({ title, category, discount, tax });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({
    //   title: titleForm.err,
    //   isbn: isbnForm.err,
    //   editorial: editorialForm.err,
    //   price: priceForm.err,
    //   imgUrl: imgUrlForm.err,
    //   language: languageForm.err,
    //   edition: editionForm.err,
    //   pages: pagesForm.err,
    //   format: formatForm.err
    // });

    if (
      titleForm.err === false &&
      isbnForm.err === false &&
      priceForm.err === false &&
      editorialForm.err === false &&
      imgUrlForm.err === false &&
      languageForm.err === false &&
      editionForm.err === false &&
      editorialForm.err === false &&
      pagesForm.err === false &&
      formatForm.err === false
    ) {
      const authorsId = authorsForm.map((a) => a.id);
      const categoryId = categoryForm.map((c) => c.id);
      const book = {
        title: titleForm.field,
        isbn: isbnForm.field,
        price: Number(priceForm.field),
        imgUrl: imgUrlForm.field,
        details: detailsForm,
        language: languageForm.field,
        edition: editionForm.field,
        editorial: editorialForm.field,
        pages: Number(pagesForm.field),
        format: formatForm.field.toLowerCase(),
        priceTaxId: taxForm.id,
        priceDiscountId: discountForm.id,
        categoryIds: categoryId,
        authorIds: authorsId
      };
      createBook(book);

      setTitleForm({ field: '', err: null });
      setIsbnForm({ field: '', err: null });
      setEditorialForm({ field: '', err: null });
      setImgUrlForm({ field: '', err: null });
      setLanguageForm({ field: '', err: null });
      setPriceForm({ field: '', err: null });
      setEditionForm({ field: '', err: null });
      setPagesForm({ field: '', err: null });
      setFormatForm({ field: '', err: null });
      setDetailsForm('');
      setAuthorsForm([]);
      setCategoryForm([]);
      setDiscountForm([]);
      setTaxForm([]);
    } else {
      console.log('error');
    }
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
          state={editorialForm}
          setState={setEditorialForm}
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
          data={authorsData}
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
          <span>Guardar</span>
        </button>
      </form>
      <div>
        {isSuccess && (
          <div>
            <p>&#x2705;</p>
          </div>
        )}
      </div>
    </div>
  );
};

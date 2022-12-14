import { CircularProgress } from '@mui/material';
import { AuthorItemList } from './AuthorItemList';
import { TableHead } from '../../tables/TableHead';
import { useGetAllAuthorsQuery } from '../../../../services/api/books/BookiApi';

export const AuthorList = () => {
  const { data: allAuthors, isLoading } = useGetAllAuthorsQuery();
  const columns = [
    { label: 'Nombre', field: 'name', sorteable: true },
    { label: 'Año', field: 'year', sorteable: true },
    { label: 'Pais', field: 'country', sorteable: true },
    { label: 'Acciones', field: 'actions', sorteable: false }
  ];
  // const [identificationType, setIdentificationType] = useState([]);

  // useEffect(() => {
  //   fetcherAuthor({
  //     method: 'GET',
  //     endPoint: 'author'
  //   }).then((data) => {
  //     setInfoCard(data);
  //   });
  // }, []);

  // const { books } = infoCard;
  // console.log(books);

  // useEffect(() => {
  //   getidentificationType().then((data) => {
  //     setIdentificationType(data);
  //   });
  // }, []);

  // const ident = identificationType;
  // console.log(ident);
  /*
  useEffect(() => {
    authorServiceAxios.getAll().then((res) => {
      setAxAuthor(res.data);
    });
  }, []);
  useEffect(() => {
    dispatch(getAllAuthors());
  }, [dispatch]);
*/
  // console.log(axauthor);
  // console.log(allAuthors);

  //console.log(allAuthors);

  if (isLoading)
    return (
      <div>
        <CircularProgress />
      </div>
    );

  return (
    <div>
      <table>
        <TableHead columns={columns} />
        {allAuthors.map((author) => {
          return <AuthorItemList key={author.id} {...author} />;
        })}
      </table>
    </div>
  );
};

import { CircularProgress } from '@mui/material';
import { useGetAllTaxesQuery } from '../../../../services/api/books/BookiApi';
import { TableHead } from '../../tables/TableHead';
import { TaxesItem } from './TaxesItem';

export const TaxesList = () => {
  const { data: allTaxes, isLoading } = useGetAllTaxesQuery();

  const columns = [
    { label: 'Nombre', field: 'name' },
    { label: 'Valor (%)', field: 'value' },
    { label: 'Acciones', field: 'actions' }
  ];

  console.log(allTaxes);
  if (isLoading) return <CircularProgress />;

  return (
    <div>
      <table>
        <TableHead columns={columns} />
        {allTaxes.map((tax) => {
          return <TaxesItem key={tax.id} {...tax} />;
        })}
      </table>
    </div>
  );
};

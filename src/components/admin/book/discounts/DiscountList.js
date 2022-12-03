import { CircularProgress } from '@mui/material';
import { useGetAllDiscountsQuery } from '../../../../services/api/books/BookiApi';

import { TableHead } from '../../tables/TableHead';
import { DiscountItem } from './DiscountItem';

export const DiscountList = () => {
  const { data: allDiscount, isLoading } = useGetAllDiscountsQuery();
  const columns = [
    { label: 'Nombre', field: 'name' },
    { label: 'Valor (%)', field: 'value' },
    { label: 'Acciones', field: 'actions' }
  ];

  console.log(allDiscount);
  if (isLoading) return <CircularProgress />;

  return (
    <div>
      <table>
        <TableHead columns={columns} />
        {allDiscount.map((discount) => {
          return <DiscountItem key={discount.id} {...discount} />;
        })}
      </table>
    </div>
  );
};

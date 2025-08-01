import { TableCell, TableRow } from '@/components/ui/table';

export function Show({ item }) {
    const toEuros = (cents) => {
        return (cents / 100).toFixed(2) + '€';
    };

    return (
        <TableRow>
            <TableCell className="text-left font-bold">{item.name}</TableCell>
            <TableCell>{toEuros(item.price_sm)}</TableCell>
            <TableCell>{toEuros(item.price_md)}</TableCell>
            <TableCell>{toEuros(item.price_lg)}</TableCell>
        </TableRow>
    );
}

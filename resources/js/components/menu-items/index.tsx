import { Show as MenuItem } from '@/components/menu-items/show';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function Index({ items }) {
    return (
        <Table className="m-auto w-max table-auto lg:text-lg">
            <TableHeader>
                <TableRow>
                    <TableHead></TableHead>
                    <TableHead className="text-center font-bold lg:px-8">Sm</TableHead>
                    <TableHead className="text-center font-bold lg:px-8">Md</TableHead>
                    <TableHead className="text-center font-bold lg:px-8">Lg</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>{items && items.map((item) => <MenuItem item={item} />)}</TableBody>
        </Table>
    );
}

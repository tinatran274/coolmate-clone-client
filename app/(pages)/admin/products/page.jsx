'use client'
import * as React from 'react'
import { CiFilter } from 'react-icons/ci'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { isEmpty } from 'lodash'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
const data = [
  {
    id: 'm5gr84i9',
    price: 316,
    quantity: 835,
    product_name:
      'ken99@yahoo.codasssssssssssssssssssssssssssssssssssssssssssssssssssfdsfdsfdsfdfsdfsdfdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkm',
    deleted: 'true'
  },
  {
    id: '3u1reuv4',
    price: 242,
    quantity: 835,
    product_name: 'Abe45@gmail.com',
    deleted: 'false'
  },
  {
    id: 'derv1ws0',
    price: 837,
    quantity: 835,
    product_name: 'Monserrat44@gmail.com'
  },
  {
    id: '5kma53ae',
    price: 874,
    quantity: 835,
    product_name: 'Silas22@gmail.com'
  },
  {
    id: 'm5gr84i9',
    price: 316,
    quantity: 835,
    product_name: 'ken99@yahoo.com'
  },
  {
    id: '3u1reuv4',
    price: 242,
    quantity: 835,
    product_name: 'Abe45@gmail.com'
  },
  {
    id: 'derv1ws0',
    price: 837,
    quantity: 835,
    product_name: 'Monserrat44@gmail.com'
  },
  {
    id: '5kma53ae',
    price: 874,
    quantity: 835,
    product_name: 'Silas22@gmail.com'
  },
  {
    id: 'm5gr84i9',
    price: 316,
    quantity: 835,
    product_name: 'ken99@yahoo.com'
  },
  {
    id: '3u1reuv4',
    price: 242,
    quantity: 835,
    product_name: 'Abe45@gmail.com'
  },
  {
    id: 'derv1ws0',
    price: 837,
    quantity: 835,
    product_name: 'Monserrat44@gmail.com'
  },
  {
    id: '5kma53ae',
    price: 874,
    quantity: 835,
    product_name: 'Silas22@gmail.com'
  },
  {
    id: 'm5gr84i9',
    price: 316,
    quantity: 835,
    product_name: 'ken99@yahoo.com'
  },
  {
    id: '3u1reuv4',
    price: 242,
    quantity: 835,
    product_name: 'Abe45@gmail.com'
  },
  {
    id: 'derv1ws0',
    price: 837,
    quantity: 835,
    product_name: 'Monserrat44@gmail.com'
  },
  {
    id: '5kma53ae',
    price: 874,
    quantity: 835,
    product_name: 'Silas22@gmail.com'
  },
  {
    id: 'm5gr84i9',
    price: 316,
    quantity: 835,
    product_name: 'ken99@yahoo.com'
  },
  {
    id: '3u1reuv4',
    price: 242,
    quantity: 835,
    product_name: 'Abe45@gmail.com'
  },
  {
    id: 'derv1ws0',
    price: 837,
    quantity: 837,
    product_name: 'Monserrat44@gmail.com'
  },
  {
    id: '5kma53ae',
    price: 874,
    quantity: 835,
    product_name: 'Silas22@gmail.com'
  },
  {
    id: 'bhqecj4p',
    price: 721,
    quantity: 835,
    product_name: 'carmella@hotmail.com'
  }
]

export const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => <div className="capitalize">{row.getValue('id')}</div>
  },
  {
    accessorKey: 'product_name',
    header: 'Product Name',
    cell: ({ row }) => (
      <div className="capitalize truncate w-[400px]">
        {row.getValue('product_name')}
      </div>
    )
  },
  {
    accessorKey: 'price',
    header: ({ column }) => (
      <div
        className="flex cursor-pointer hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </div>
    ),
    cell: ({ row }) => {
      const price = parseFloat(row.getValue('price'))

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price)

      return <div className="font-medium">{formatted}</div>
    }
  },
  {
    accessorKey: 'quantity',
    header: ({ column }) => (
      <div
        className="flex cursor-pointer hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Quantity
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue('quantity')}</div>
    )
  },
  {
    accessorKey: 'deleted',
    header: 'Deleted',
    cell: ({ row }) => (
      <div className="uppercase">{row.getValue('deleted')}</div>
    )
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.id)}
            >
              Copy product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit product</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View product details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]

const ProductsPage = () => {
  const [sorting, setSorting] = React.useState()
  const [filters, setFilters] = React.useState('product_name')
  const [columnFilters, setColumnFilters] = React.useState()
  const [columnVisibility, setColumnVisibility] = React.useState()
  const [rowSelection, setRowSelection] = React.useState({})
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    initialState: {
      pagination: {
        pageSize: 10
      }
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  })
  return (
    <div className="w-full p-4 pt-6 h-fit">
      <div className="justify-between flex">
        <h2 className="font-bold mb-1 text-xl">Products</h2>
        <Button
          variant="outline"
          size="sm"
          className="bg-black text-white hover:bg-white hover:text-black"
        >
          New Product
        </Button>
      </div>
      <div className="flex items-center py-4">
        <div className="w-full">
          <div className="flex">
            <div className="flex relative">
              <Input
                placeholder={
                  filters === 'id'
                    ? 'Search by #id...'
                    : 'Search by product name...'
                }
                value={table.getColumn(filters)?.getFilterValue() ?? ''}
                onChange={(event) =>
                  table.getColumn(filters)?.setFilterValue(event.target.value)
                }
                className="max-w-[300px] min-w-[300px] pr-[30px]"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="none"
                    className="absolute right-0 cursor-pointer hover:bg-none"
                  >
                    <CiFilter />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuLabel>Options</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={filters}
                    onValueChange={setFilters}
                  >
                    <DropdownMenuRadioItem value="id">ID</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="product_name">
                      Product name
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id === 'product_name'
                          ? 'Product name'
                          : column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {!isEmpty(rowSelection) && (
            <div className="border mt-2 flex rounded-md overflow-hidden w-fit">
              <div className="border p-2 px-4 text-sm">
                {Object.keys(rowSelection).length} selected
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border p-2 px-4 text-sm cursor-pointer rounded-none"
                  >
                    Enable
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-base">
                      Enable {Object.keys(rowSelection).length}{' '}
                      {Object.keys(rowSelection).length > 1
                        ? 'products'
                        : 'product'}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure enable {Object.keys(rowSelection).length}{' '}
                      {Object.keys(rowSelection).length > 1
                        ? 'products?'
                        : 'product?'}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border p-2 px-4 text-sm cursor-pointer rounded-none"
                  >
                    Disable
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-base">
                      Disable {Object.keys(rowSelection).length}{' '}
                      {Object.keys(rowSelection).length > 1
                        ? 'products'
                        : 'product'}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure disable {Object.keys(rowSelection).length}{' '}
                      {Object.keys(rowSelection).length > 1
                        ? 'products?'
                        : 'product?'}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          )}
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results found!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
export default ProductsPage

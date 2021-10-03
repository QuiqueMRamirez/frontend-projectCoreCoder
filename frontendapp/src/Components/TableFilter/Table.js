import React from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import Table from "react-bootstrap/Table";
import InputFilter from "../../Components/GlobalFilter/InputFilter";
import Span from "../../Components/Span/Span";



function TableR({ columns, data }) {
  const props = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    state,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = props;
  React.useEffect(() => {}, [globalFilter]);

  return (
    <>
      <InputFilter
        type="text"
        placeholder="Search transaction"
        label="Search transaction"
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />

      <Table
        striped
        bordered
        hover
        {...getTableProps()}
        style={{
          marginTop: "35px",
          backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
        }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{ textAlign: "center" }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} style={{ textAlign: "center" }}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <Span pageIndex={pageIndex} pageOptions={pageOptions} />
        <Span
          onchange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          pageIndex={pageIndex}
          flag
        />{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[1, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>

      <br />
      <div>
        <pre>
          <code>{JSON.stringify(state.filters, null, 2)}</code>
        </pre>
      </div>
    </>
  );
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Transactions",
        columns: [
          {
            Header: "Id",
            accessor: "id",
          },
          {
            Header: "Account",
            accessor: "account",
          },
          {
            Header: "Date",
            accessor: "date",
          },
          {
            Header: "Amount",
            accessor: "amount",
          },
        ],
      },
    ],
    []
  );

  const data = [
    {
      id: 1,
      account: "car",
      date: 30,
      amount: "active",
    },
    {
      id: 2,
      account: "car",
      date: 30,
      amount: "active",
    },
    {
      id: 3,
      account: "car",
      date: 30,
      amount: "active",
    },
  ];

  return <TableR columns={columns} data={data} />;
}

export default App;

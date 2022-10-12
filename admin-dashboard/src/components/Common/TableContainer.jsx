import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
} from "react-table";
import { Table, Row, Col, Button, Input } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Filter = ({ column }) => {
  return (
    <div style={{ marginTop: 5 }}>
      {column.canFilter && column.render('Filter')}
    </div>
  );
};

export const TableContainer = ({
  columns,
  data,
  handleOrderClicks,
  handleUserClick,
  handleCustomerClick,
  customPageSize,
  className,
  customPageSizeOptions
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: customPageSize,
        sortBy: [
          {
            desc: true,
          },
        ],
      },
    },
useFilters,
useSortBy,
useExpanded,
usePagination
);

const generateSortingIndicator = column => {
return column.isSorted ? (column.isSortedDesc ? <FontAwesomeIcon icon="fa-solid fa-caret-up" /> : <FontAwesomeIcon icon="fa-solid fa-caret-down" />) : "";
};

const onChangeInSelect = event => {
setPageSize(Number(event.target.value));
};

const onChangeInInput = event => {
const page = event.target.value ? Number(event.target.value) - 1 : 0;
gotoPage(page);
};
return (
<>
  <Row className="mb-2">
    <Col md={customPageSizeOptions ? 2 : 1}>
      <select
        className="form-select"
        value={pageSize}
        onChange={onChangeInSelect}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </Col>
  </Row>

  <div className="table-responsive react-table">
    <Table hover {...getTableProps()} className={className}>
      <thead className="table-nowrap">
        {headerGroups.map(headerGroup => (
          <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th key={column.id}>
                <div className="mb-2" {...column.getSortByToggleProps()}>
                  {column.render("Header")}
                  {generateSortingIndicator(column)}
                </div>
                <Filter column={column} />
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row);
          return (
              <tr key={row.getRowProps().key}>
                {row.cells.map(cell => {
                  return (
                    <td key={cell.id} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
          );
        })}
      </tbody>
    </Table>
  </div>

  <Row className="justify-content-md-end justify-content-center align-items-center">
    <Col className="col-md-auto">
      <div className="d-flex gap-1">
        <Button
          color="primary"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </Button>
        <Button
          color="primary"
          onClick={previousPage}
          disabled={!canPreviousPage}
        >
          {"<"}
        </Button>
      </div>
    </Col>
    <Col className="col-md-auto d-none d-md-block">
      Page{" "}
      <strong>
        {pageIndex + 1} of {pageOptions.length}
      </strong>
    </Col>
    <Col className="col-md-auto">
      <Input
        type="number"
        min={1}
        style={{ width: 70 }}
        max={pageOptions.length}
        defaultValue={pageIndex + 1}
        onChange={onChangeInInput}
      />
    </Col>

    <Col className="col-md-auto">
      <div className="d-flex gap-1">
        <Button color="primary" onClick={nextPage} disabled={!canNextPage}>
          {">"}
        </Button>
        <Button
          color="primary"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </Button>
      </div>
    </Col>
  </Row>
</>
);
};

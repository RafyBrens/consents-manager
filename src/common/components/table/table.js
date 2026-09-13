import React from 'react';
import { useTable, usePagination } from 'react-table';
import PropTypes from 'prop-types';
import useStyles from './styles';

const CustomTable = ({ columns, data, pageSize }) => {
  const classes = useStyles();

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of  'rows', page has only the rows for the active page
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize },
    },
    usePagination
  );

  return (
    <>
      <table className={classes.table} {...getTableProps()}>
        <thead className={classes.th}>
          {headerGroups.map(headerGroup => (
            <tr className={classes.tr} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className={classes.th} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            const props = {
              ...row.getRowProps(),
              className: classes.tr,
            };
            return (
              <tr {...props}>
                {row.cells.map(cell => (
                  <td className={classes.td} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className={classes.pagination}>
        <button
          className={classes.navButton}
          type="button"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}>
          {'<< Previous page'}
        </button>{' '}
        <span className={classes.pages}>
          Page{' '}
          <strong>
            {pageOptions.length > 0 ? pageIndex + 1 : 0} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button
          className={classes.navButton}
          type="button"
          onClick={() => nextPage()}
          disabled={!canNextPage}>
          {'Next page>>'}
        </button>{' '}
      </div>
    </>
  );
};

CustomTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default CustomTable;

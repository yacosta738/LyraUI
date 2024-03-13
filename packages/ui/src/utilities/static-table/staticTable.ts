import chunk from 'lodash/chunk';
import sortBy from 'lodash/sortBy';
import { Control } from "~/components/table/types";

const defaultField = "createdAt";
const defaultControl: Control = {
  paginationType: "offset",
  sort: {
    field: defaultField, direction: "desc"
  },
  offset: {
    rows: 10, page: 1
  }
};
export default <T extends Record<string, any>>(
	rows: T[],
  control: Control = defaultControl
) => {
	if (!rows?.length) return [];

  const sort = control.sort;
	let arr = [...rows];
  if(sort && sort.field){
    const sortedArr = sortBy(arr, (item) => item[sort?.field ?? defaultField]);
    arr = sort.direction === 'asc' ? sortedArr : sortedArr.reverse();
  }
  const offset = control.offset;
	const chunked = chunk(arr, offset?.rows);
  const page = (offset?.page ?? 1) - 1;
	return chunked[page];
};

"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") ?? 1;
  console.log({ pathName, searchParams, currentPage, totalPages });

  const createPageLinks = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    if (pageNumber === "...") {
      // if the page number is ..., return the current page
      return `${pathName}?${params.toString()}`;
    }

    if (+pageNumber === 0) {
      // if the page number is 0, return the current page
      return `${pathName}?${params.toString()}`;
    }

    if (+pageNumber > totalPages) {
      // if the page number is greater than the total number of pages, return the current page
      return `${pathName}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());
    return `${pathName}?${params.toString()}`; // return the new page number
  };
  return (
    <div className="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item disabled">
            <Link
              className={`
              page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded ${
                +currentPage === 1
                  ? "text-gray-500 pointer-events-none"
                  : "text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              }  
              `}
              href={createPageLinks(+currentPage - 1)}
              aria-disabled={+currentPage === 1 ? "true" : "false"}
            >
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
            >
              1
            </Link>
          </li>
          <li className="page-item active">
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
              href="#"
            >
              2 <span className="visually-hidden"></span>
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
            >
              3
            </Link>
          </li>
          <li className="page-item">
            <Link
              className={`page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded ${
                +currentPage === totalPages
                  ? "text-gray-500 pointer-events-none"
                  : "text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              }`}
              aria-disabled={+currentPage === totalPages ? "true" : "false"}
              href={createPageLinks(+currentPage + 1)}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

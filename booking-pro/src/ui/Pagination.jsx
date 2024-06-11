import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

const Pagination = ({ count }) => {
  const newCount = 20;
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const pageCount = Math.ceil(newCount / 10);

  const nextPage = () => {
    const next = currentPage === pageCount ? pageCount : currentPage + 1;
    searchParams.set('page', next);
    setSearchParams(searchParams);
  }

  const prevPage = () => {
    const prev = currentPage === 1 ? 1 : currentPage - 1;
    searchParams.set('page', prev);
    setSearchParams(searchParams);
  }

  return (
    <StyledPagination>
      <p>Showing <span>{(currentPage - 1) * 10 + 1 }</span> to <span>{currentPage === pageCount ? count : currentPage * 10}</span> of <span>{newCount}</span></p>
      <Buttons>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </PaginationButton>
        <PaginationButton onClick={nextPage} disabled={currentPage === pageCount}>
            Next
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  )
}

export default Pagination;
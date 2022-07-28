import styled from "styled-components"

export const Container = styled.div`
  .date-field-input {
    visibility: hidden;
    height: 0;
    padding: 0;
    width: 0;
    position: absolute;
  }

  .react-datepicker {
    width: 398px;
    font-family: "Inter";

    display: flex;
    border: none;
    border-radius: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 90vw;
    }

    .react-datepicker__triangle {
      display: none;
    }

    .react-datepicker__navigation {
      top: 12px;
      width: ${({ theme }) => theme.space[8]};
      height: ${({ theme }) => theme.space[8]};
    }

    .react-datepicker__navigation--next {
      right: 0;
    }

    .react-datepicker__navigation-icon:before {
      border-color: ${({ theme }) => theme.colors.text};
    }

    .react-datepicker__month-container {
      padding: ${({ theme }) => theme.space[2]};
      width: 100%;
    }

    .react-datepicker__header {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.space[5]};

      background-color: ${({ theme }) => theme.colors.white};
      border: none;
    }

    .react-datepicker__current-month {
      font-family: "Archivo";
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 30px;

      color: ${({ theme }) => theme.colors.subtitle};
      text-transform: capitalize;
    }

    .react-datepicker__day-names {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      padding-bottom: ${({ theme }) => theme.space[4]};
      margin-bottom: ${({ theme }) => theme.space[1]};

      border-bottom: 1px solid #ebebf0;
    }

    .react-datepicker__day-name {
      font-family: "Archivo";
      font-weight: 600;

      font-size: 0.8rem;
      line-height: 15px;

      text-align: center;
      letter-spacing: 0.08em;
      text-transform: uppercase;

      color: ${({ theme }) => theme.colors.details};

      width: 64px;
    }

    .react-datepicker__month {
      margin: 0;
    }

    .react-datepicker__week {
      display: flex;
      justify-content: space-between;

      width: 100%;
    }

    .react-datepicker__day {
      font-weight: 400;
      font-size: 1rem;
      line-height: 24px;
      text-align: center;
      color: ${({ theme }) => theme.colors.text};

      width: 56px;
      height: 56px;

      margin: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 0px;
      transition: all 0.2s;
    }

    .react-datepicker__day--disabled {
      color: ${({ theme }) => theme.colors.details};
      cursor: not-allowed;

      pointer-events: none;
      user-select: none;

      opacity: 0.5;
    }

    .react-datepicker__day--keyboard-selected {
      background-color: ${({ theme }) => theme.colors.principal} !important;
      color: ${({ theme }) => theme.colors.white} !important;
    }

    .react-datepicker__day--range-start {
      background-color: ${({ theme }) => theme.colors.principal} !important;
      color: ${({ theme }) => theme.colors.white} !important;
    }

    .react-datepicker__day--in-range {
      background-color: #fdedef;
      color: ${({ theme }) => theme.colors.principal};
    }

    .react-datepicker__day--range-end {
      background-color: ${({ theme }) => theme.colors.principal} !important;
      color: ${({ theme }) => theme.colors.white} !important;
    }

    // TIMER SELECT
    .react-datepicker__time-container {
      border-left: 1px solid ${({ theme }) => theme.colors.border};
    }

    .react-datepicker-time__header {
      font-family: "Archivo";
      font-weight: 600;
      font-size: 1rem;

      color: ${({ theme }) => theme.colors.subtitle};
      text-transform: capitalize;
    }

    .react-datepicker__time-list-item {
      font-weight: 400;
      font-size: 1rem;
      line-height: 24px;
      text-align: center;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`

import styled from "styled-components"

export const Container = styled.div`
  .date-field-input {
    visibility: hidden;
    height: 0;
    padding: 0;
    width: 0;
    position: absolute;
  }

  .react-calendar {
    font-family: "Inter";
    border: none;
    width: 100%;
    border-radius: 0px;

    *:disabled {
      opacity: 0.3;
      pointer-events: none;
      background-color: transparent;
    }

    .react-calendar__navigation__label__labelText {
      font-family: "Archivo";
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 30px;

      color: ${({ theme }) => theme.colors.subtitle};
      text-transform: capitalize;
    }

    .react-calendar__navigation__arrow {
      font-size: ${({ theme }) => theme.fontSizes["lg"]};
    }

    .react-calendar__month-view__weekdays {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      margin-bottom: ${({ theme }) => theme.space[1]};

      border-bottom: 1px solid #ebebf0;
    }

    .react-calendar__month-view__weekdays__weekday {
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

    .react-calendar__month-view__weekdays__weekday abbr {
      text-decoration: none;
    }

    .react-calendar__month-view__days__day {
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

    .react-calendar__tile--active {
      background-color: ${({ theme }) => theme.colors.principal} !important;
      color: ${({ theme }) => theme.colors.white} !important;
    }

    .react-calendar__tile--now {
      background: transparent;
    }

    .react-calendar-date-disabled {
      opacity: 0.3;
      pointer-events: none;
    }

    .react-calendar_start--date {
      background-color: ${({ theme }) => theme.colors.principal} !important;
      color: ${({ theme }) => theme.colors.white} !important;
    }

    .react-calendar_end--date {
      background-color: ${({ theme }) => theme.colors.principal} !important;
      color: ${({ theme }) => theme.colors.white} !important;
    }

    .react-calendar_interval--date {
      background-color: #fdedef;
      color: ${({ theme }) => theme.colors.principal};
    }
  }
`

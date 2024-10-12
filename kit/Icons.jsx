import "./Icons.css"

const makeIcon =
  (Component) =>
  ({color, size = 2}) =>
    (
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        style={{color: color, height: `${size}rem`, width: `${size}rem`}}
      >
        {Component}
      </svg>
    )

export const CopyIcon = makeIcon(
  <path
    d="M17.8182 4C15.2074 4 13.0909 6.07869 13.0909 8.64287V34.3572C13.0909 36.9214 15.2074 39.0001 17.8182 39.0001H35.2727C37.8835 39.0001 40 36.9214 40 34.3572V8.64287C40 6.07868 37.8835 4 35.2727 4H17.8182ZM16 8.64287C16 7.65664 16.814 6.85715 17.8182 6.85715H35.2727C36.2769 6.85715 37.0909 7.65664 37.0909 8.64287V34.3572C37.0909 35.3435 36.2769 36.143 35.2727 36.143H17.8182C16.814 36.143 16 35.3435 16 34.3572V8.64287ZM10.9091 9.35576C9.20076 10.0555 8 11.7114 8 13.6428V34.7143C8 39.8427 12.2329 44 17.4545 44H30.1818C32.1485 44 33.8346 42.8206 34.5471 41.1424H30.2234C30.2096 41.1427 30.1958 41.1428 30.1818 41.1428H17.4545C13.8396 41.1428 10.9091 38.2647 10.9091 34.7143V9.35576Z"
    fill="currentColor"
  />
)

export const OkIcon = makeIcon(
  <>
    {" "}
    <path
      d="M9 28L17 36"
      stroke="currentColor"
      stroke-width="4"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <path
      d="M39 14L17 36"
      stroke="currentColor"
      stroke-width="4"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
  </>
)

export const DismissIcon = makeIcon(
  <>
    <path
      d="M11 11L37 37"
      stroke="currentColor"
      stroke-width="4"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <path
      d="M37 11L11 37"
      stroke="currentColor"
      stroke-width="4"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
  </>
)

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  fill: any
  noMargin?: boolean
}

// Font Awesome Icon
const Icon = ({ fill, noMargin = false }: Props) => {
  return (
    <FontAwesomeIcon
      icon={fill}
      className={`${noMargin ? '' : 'mr-3'} fa-show`}
    />
  )
}

export default Icon


export const SearchIcon = ({fill, height=20}: {fill: string , height?: number}) => {
  return (
    <svg height={height} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.8523 13.1475C14.462 12.7736 14.0822 12.389 13.7132 11.9941C13.4032 11.6791 13.2165 11.45 13.2165 11.45L10.8832 10.3358C11.8173 9.27632 12.3329 7.91245 12.3332 6.49996C12.3332 3.28413 9.7165 0.666626 6.49984 0.666626C3.28317 0.666626 0.666504 3.28413 0.666504 6.49996C0.666504 9.71579 3.28317 12.3333 6.49984 12.3333C7.969 12.3333 9.30817 11.7833 10.3357 10.8841L11.4498 13.2175C11.4498 13.2175 11.679 13.4041 11.994 13.7141C12.3165 14.0166 12.7407 14.4258 13.1473 14.8533L14.279 16.0133L14.7823 16.5516L16.5498 14.7841L16.0115 14.2808C15.6957 13.9708 15.274 13.5591 14.8523 13.1475ZM6.49984 10.6666C4.20234 10.6666 2.33317 8.79746 2.33317 6.49996C2.33317 4.20246 4.20234 2.33329 6.49984 2.33329C8.79734 2.33329 10.6665 4.20246 10.6665 6.49996C10.6665 8.79746 8.79734 10.6666 6.49984 10.6666Z"
      fill={fill} />
    </svg>
  )
}


export const TableIcon = ({fill, height=20}: {fill: string , height?: number}) => {
  return (
    <svg height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 2.5C0 1.83696 0.263392 1.20107 0.732233 0.732233C1.20107 0.263392 1.83696 0 2.5 0L17.5 0C18.163 0 18.7989 0.263392 19.2678 0.732233C19.7366 1.20107 20 1.83696 20 2.5V17.5C20 18.163 19.7366 18.7989 19.2678 19.2678C18.7989 19.7366 18.163 20 17.5 20H2.5C1.83696 20 1.20107 19.7366 0.732233 19.2678C0.263392 18.7989 0 18.163 0 17.5V2.5ZM18.75 5H13.75V8.75H18.75V5ZM18.75 10H13.75V13.75H18.75V10ZM18.75 15H13.75V18.75H17.5C17.8315 18.75 18.1495 18.6183 18.3839 18.3839C18.6183 18.1495 18.75 17.8315 18.75 17.5V15ZM12.5 18.75V15H7.5V18.75H12.5ZM6.25 18.75V15H1.25V17.5C1.25 17.8315 1.3817 18.1495 1.61612 18.3839C1.85054 18.6183 2.16848 18.75 2.5 18.75H6.25ZM1.25 13.75H6.25V10H1.25V13.75ZM1.25 8.75H6.25V5H1.25V8.75ZM7.5 5V8.75H12.5V5H7.5ZM12.5 10H7.5V13.75H12.5V10Z"
      fill={fill} />
    </svg>
  )
}

export const PeopleIcon = ({fill, height=20}: {fill: string , height?: number}) => {
  return (
    <svg height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.8262 10.9081C11.4892 10.9081 12.125 11.1954 12.5939 11.7068C13.0627 12.2182 13.3261 12.9119 13.3261 13.6351L13.3244 14.9959C13.4961 18.3347 11.1387 20 6.76636 20C2.40906 20 0 18.3565 0 15.0432V13.6351C0 12.9119 0.26338 12.2182 0.7322 11.7068C1.20102 11.1954 1.83688 10.9081 2.49989 10.9081H10.8262ZM17.4925 10.9081C18.1556 10.9081 18.7914 11.1954 19.2602 11.7068C19.729 12.2182 19.9924 12.9119 19.9924 13.6351V14.5923C20.1424 17.5875 18.0592 19.0892 14.2519 19.0892C13.7352 19.0892 13.2494 19.0619 12.7953 19.0074C13.6902 18.1056 14.1685 16.883 14.1669 15.3377L14.156 14.945L14.1594 13.6351C14.1598 13.1191 14.0593 12.6089 13.8646 12.1387C13.6699 11.6684 13.3854 11.2489 13.0302 10.9081H17.4934H17.4925ZM6.66636 0C7.7716 0 8.83157 0.478947 9.6131 1.33148C10.3946 2.18401 10.8337 3.34029 10.8337 4.54595C10.8337 5.75161 10.3946 6.90789 9.6131 7.76042C8.83157 8.61295 7.7716 9.0919 6.66636 9.0919C5.56112 9.0919 4.50115 8.61295 3.71963 7.76042C2.93811 6.90789 2.49905 5.75161 2.49905 4.54595C2.49905 3.34029 2.93811 2.18401 3.71963 1.33148C4.50115 0.478947 5.56112 0 6.66636 0ZM14.9993 1.81802C15.8833 1.81802 16.7311 2.2011 17.3562 2.88299C17.9813 3.56487 18.3325 4.48971 18.3325 5.45405C18.3325 6.41839 17.9813 7.34323 17.3562 8.02511C16.7311 8.707 15.8833 9.09008 14.9993 9.09008C14.1153 9.09008 13.2675 8.707 12.6424 8.02511C12.0173 7.34323 11.6661 6.41839 11.6661 5.45405C11.6661 4.48971 12.0173 3.56487 12.6424 2.88299C13.2675 2.2011 14.1153 1.81802 14.9993 1.81802Z"
      fill={fill} />
    </svg>
  )
}

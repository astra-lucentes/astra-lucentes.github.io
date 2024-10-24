import './Badges.css'

export const Difficulty = ({kind}) => <span className={`difficulty ${kind.toLowerCase()}`}>{kind}</span>
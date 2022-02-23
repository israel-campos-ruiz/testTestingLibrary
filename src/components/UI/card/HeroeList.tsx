import  { FC, memo} from 'react'
import { getHeroByPublisher } from '../../../utils/getHeroByPublisher';
interface Props {
    publisher:string;
}
const HeroeList:FC<Props> = ({publisher}) => {
   const heroes =  getHeroByPublisher(publisher);
  return (
    <div>
        <ul>
            {heroes.map(heroe => (
                <li key={heroe.id} >{heroe.superHero}</li>
            ))}
        </ul>
    </div>
  )
}

export default memo(HeroeList);
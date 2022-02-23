import { heroes } from '../data/heroesData';

export const getHeroByPublisher = (publisher:string) =>  {
    const validPublisher:string[] = ['DC Comics', 'Marvel Comics'];
    if(!validPublisher.includes(publisher)) throw new Error(`${publisher} not valid`);
    return heroes.filter(heroe => heroe.publisher === publisher);
}
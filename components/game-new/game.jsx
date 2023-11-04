import { GameTitle } from "./ui/game-title";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";


export function Game() {
    return (
    <GameLayout 
    backLink={<BackLink />}
    title={<GameTitle />}
    gameInfo={<GameInfo isRatingGame playersCount={4} timeMode={'1 хв. на хід'} />}
    />
    );
}
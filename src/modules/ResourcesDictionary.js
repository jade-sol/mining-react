// Images
import StoneOre from "../images/StoneOre.webp";
import CoalOre from "../images/CoalOre.webp";
import CopperOre from "../images/CopperOre.webp";
import TinOre from "../images/TinOre.webp";
import SilverOre from "../images/SilverOre.webp";
import GoldOre from "../images/GoldOre.webp";
import Ore from "./Ore";

// Ore Dictionary
class ResourcesDictionary {
    constructor() {
        this.ores = {
            Stone: {
                name: "Stone",
                type: "ore",        
                img: StoneOre,
                hardness: 1,
                rarity: [0, 29]
            }, 
            Coal: {
                name: "Coal",
                type: "ore",
                img: CoalOre,
                hardness: 5,
                rarity: [30, 59]
            }, 
            Copper: {
                name: "Copper",
                type: "ore",
                img: CopperOre,
                hardness: 10,
                rarity: [60, 74]
            }, 
            Tin: {
                name: "Tin",
                type: "ore",
                img: TinOre,
                hardness: 10,
                rarity: [75, 94]
            }, 
            Silver: {
                name: "Silver",
                type: "ore",
                img: SilverOre,
                hardness: 25,
                rarity: [95, 99]
            }, 
            Gold: {
                name: "Gold",
                type: "ore",
                img: GoldOre,
                hardness: 50,
                rarity: [100, 100]
            }
        }
    }

    findOreByRarity(rarity) {
        let ore;

        for(let key in this.ores) {
            if (rarity >= this.ores[key].rarity[0] && rarity <= this.ores[key].rarity[1]) {
                ore = this.ores[key];
            }
        }
        
        if (!ore) {
            ore = this.ores["Stone"];
        }
        
        return ore;
    }
}

var resourcesDictionary = new ResourcesDictionary();
export default resourcesDictionary;
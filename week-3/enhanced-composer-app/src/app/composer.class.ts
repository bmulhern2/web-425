import IComposer from './composer.interface'

export class composer {
    composers: Array<IComposer> = [
        { "composerId": 0, "name": "Mozart", "genre": "Classical" },
        { "composerId": 1, "name": "Beethoven", "genre": "Classical" },
        { "composerId": 2, "name": "Bach", "genre": "Classical" },
        { "composerId": 3, "name": "Deadmau5", "genre": "Electic Dance Music" },
        { "composerId": 4, "name": "Marshmello", "genre": "Hip-Hop" }
      ]
      getComposer(composerId: number) {
        for (let composer of this.composers) {
            if(composer.composerId === composerId) {
                return composer
            } else {
                return null
            }
        }
      }
  }
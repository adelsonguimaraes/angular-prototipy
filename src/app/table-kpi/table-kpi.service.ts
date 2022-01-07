import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableKpiService {
  data = {
    last_year: 20,
    current_year: 21,
    yr: [
        {
            month: 'Jan',
            value: '361'
        },
        {
            month: 'Feb',
            value: 598 
        },
        {
            month: 'Mar',
            value: 841
        },
        {
            month: 'Apr',
            value: 361
        },
        {
            month: 'May',
            value: 361
        },
        {
            month: 'Jun',
            value: 361
        },
        {
            month: 'Jul',
            value: 361
        },
        {
            month: 'Aug',
            value: 361
        },
        {
            month: 'Sep',
            value: 361
        },
        {
            month: 'Oct',
            value: 361
        },
        {
            month: 'Nov',
            value: 361
        },
        {
            month: 'Dec',
            value: 361
        }
    ],
    target_internal: [
        {
            month: 'Jan',
            value: 108
        },
        {
            month: 'Feb',
            value: 237
        },
        {
            month: 'Mar',
            value: 400
        },
        {
            month: 'Apr',
            value: 361
        },
        {
            month: 'May',
            value: 361
        },
        {
            month: 'Jun',
            value: 108
        },
        {
            month: 'Jul',
            value: 108
        },
        {
            month: 'Aug',
            value: 108
        },
        {
            month: 'Sep',
            value: 108
        },
        {
            month: 'Oct',
            value: 108
        },
        {
            month: 'Nov',
            value: 108
        },
        {
            month: 'Dec',
            value: 108
        }
    ],
    target_aggres: [
        {
            month: 'Jan',
            value: 150
        },
        {
            month: 'Feb',
            value: 320
        },
        {
            month: 'Mar',
            value: 525
        },
        {
            month: 'Apr',
            value: 150
        },
        {
          month: 'May',
          value: 150
        },
        {
            month: 'Jun',
            value: 150
        },
        {
            month: 'Jul',
            value: 150
        },
        {
            month: 'Aug',
            value: 150
        },
        {
            month: 'Sep',
            value: 150
        },
        {
            month: 'Oct',
            value: 150
        },
        {
            month: 'Nov',
            value: 150
        },
        {
            month: 'Dez',
            value: 150
        },
    ],
    new_idea: [
        {
            month: 'Jan',
            value: 3.5
        },
        {
            month: 'Feb',
            value: 49.8
        },
        {
            month: 'Mar',
            value: 133.2
        },
        {
            month: 'Apr',
            value: 3.5
        },
        {
            month: 'May',
            value: 3.5
        },
        {
            month: 'Jun',
            value: 3.5
        },
        {
            month: 'Jul',
            value: 3.5
        },
        {
            month: 'Aug',
            value: 3.5
        },
        {
            month: 'Sep',
            value: 3.5
        },
        {
            month: 'Oct',
            value: 3.5
        },
        {
            month: 'Nov',
            value: 3.5
        },
        {
            month: 'Dec',
            value: 3.5
        },
    ],
    'carry_over': [
    {
            month: 'Jan',
            value: 155.6
        },
        {
            month: 'Feb',
            value: 313.9
        },
        {
            month: 'Mar',
            value: 423.9
        },
        {
            month: 'Apr',
            value: 155.6
        },
        {
            month: 'May',
            value: 155.6
        },
        {
            month: 'Jun',
            value: 155.6
        },
        {
            month: 'Jul',
            value: 155.6
        },
        {
            month: 'Aug',
            value: 155.6
        },
        {
            month: 'Sep',
            value: 155.6
        },
        {
            month: 'Oct',
            value: 155.6
        },
        {
            month: 'Nov',
            value: 155.6
        },
        {
            month: 'Dec',
            value: 155.6
        },
    ],
    total: [
        {
            month: 'Jan',
            value: 159.0
        },
        {
            month: 'Feb',
            value: 363.7
        },
        {
            month: 'Mar',
            value: 557.1
        },
        {
            month: 'Apr',
            value: 159.0
        },
        {
            month: 'May',
            value: 159.0
        },
        {
            month: 'Jun',
            value: 159.0
        },
        {
            month: 'Jul',
            value: 159.0
        },
        {
            month: 'Aug',
            value: 159.0
        },
        {
            month: 'Sep',
            value: 159.0
        },
        {
            month: 'Oct',
            value: 159.0
        },
        {
            month: 'Nov',
            value: 159.0
        },
        {
            month: 'Dec',
            value: 159.0
        }
    ],
    achievement: [
        {
            month: 'Jan',
            value: 106
        },
        {
            month: 'Feb',
            value: 114
        },
        {
            month: 'Mar',
            value: 106
        },
        {
            month: 'Apr',
            value: 106
        },
        {
            month: 'May',
            value: 95
        },
        {
            month: 'Jun',
            value: 106
        },
        {
            month: 'Jul',
            value: 54
        },
        {
            month: 'Aug',
            value: 106
        },
        {
            month: 'Sep',
            value: 106
        },
        {
            month: 'Oct',
            value: 106
        },
        {
            month: 'Nov',
            value: 106
        },
        {
            month: 'Dec',
            value: 106
        }
    ],
    improve: [
        {
            month: 'Jan',
            value: 6
        },
        {
            month: 'Feb',
            value: 14
        },
        {
            month: 'Mar',
            value: 6
        },
        {
            month: 'Apr',
            value: 6
        },
        {
            month: 'May',
            value: 6
        },
        {
            month: 'Jun',
            value: 6
        },
        {
            month: 'Jul',
            value: 6
        },
        {
            month: 'Aug',
            value: 6
        },
        {
            month: 'Sep',
            value: 6
        },
        {
            month: 'Oct',
            value: 6
        },
        {
            month: 'Nov',
            value: 6
        },
        {
            month: 'Dec',
            value: 6
        },
    ],
    py: [
        {
            month: 'Jan',
            value: -56
        },
        {
            month: 'Feb',
            value: -39
        },
        {
            month: 'Mar',
            value: -34
        },
        {
            month: 'Apr',
            value: -56
        },
        {
            month: 'May',
            value: -56
        },
        {
            month: 'Jun',
            value: -56
        },
        {
            month: 'Jul',
            value: -56
        },
        {
            month: 'Aug',
            value: -56
        },
        {
            month: 'Sep',
            value: -56
        },
        {
            month: 'Oct',
            value: -56
        },
        {
            month: 'Nov',
            value: -56
        },
        {
            month: 'Dec',
            value: -56
        },
    ]
  }

  constructor() { }

  public get() {
    return this.data;
  }

}

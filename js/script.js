'use strict'
void function () {
    const counter = () => {
        let a = 0;
        return {
            increase: () => {
                return ++a;
            },
            value: () => {
              return a;
            },
            decrease: () => {
                return --a;
            }
        }
    }
    const count = counter();
    count.increase();
    count.increase();
    count.decrease();
    count.value();
}()


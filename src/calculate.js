export default function calculate(state, value) {
    if(value === 0) {
        return {
          running_count: 0,
          cards_used: 0
        };

    } else {
        return {
            running_count: state.running_count + value,
            cards_used: state.cards_used + 1
        }
    }
}
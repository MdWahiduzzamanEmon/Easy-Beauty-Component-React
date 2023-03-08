
const Show = ({ when,children }) => {
    if(!when) return console.error('Show component requires a boolean prop "when"');
    return when ? children : null;
}

export default Show;
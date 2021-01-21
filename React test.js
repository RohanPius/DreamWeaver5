return <p>{"A"+props.title}</p>;
}

const el = <Test title="X" />;
ReactDOM.render(
    el,
    document.getElementById('root')
);
function App() {
    return <div>
    <Hello name="David" />
        <Hello name="James" />
        <Hello name="Amy" />
        </div>;
}
class Hello extends React.Component {
    render() {
        return <p>Hello, {this.props.name}!</p>;
    }
}
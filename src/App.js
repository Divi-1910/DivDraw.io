import Board from "./Components/Board";
import ToolBar from "./Components/Toolbar";
import ToolBox from "./Components/Toolbox";
import BoardProvider from "./store/BoardProvider";
import ToolboxProvider from "./store/ToolBoxProvider";

function App() {
	return (
		<BoardProvider>
			<ToolboxProvider>
				<ToolBar />
				<Board />
				<ToolBox />
			</ToolboxProvider>
		</BoardProvider>
	);
}

export default App;

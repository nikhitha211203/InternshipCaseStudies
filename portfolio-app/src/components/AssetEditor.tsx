import React, { Component} from "react";
import type{ChangeEvent, FormEvent } from "react";
import type{ Asset } from "../types/Asset";

type AssetEditorProps = {
  onUpdate: (asset: Asset) => void;
};

type AssetEditorState = {
  name: string;
  symbol: string;
  value: string;
  change: string;
};

class AssetEditor extends Component<AssetEditorProps, AssetEditorState> {
  state: AssetEditorState = {
    name: "",
    symbol: "",
    value: "",
    change: ""
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<
      AssetEditorState,
      keyof AssetEditorState
    >);
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newAsset: Asset = {
      name: this.state.name,
      symbol: this.state.symbol,
      value: Number(this.state.value),
      change: Number(this.state.change)
    };

    // Send data to parent
    this.props.onUpdate(newAsset);

    // Reset form
    this.setState({
      name: "",
      symbol: "",
      value: "",
      change: ""
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <h2>Add / Update Asset</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Asset Name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="symbol"
            placeholder="Symbol"
            value={this.state.symbol}
            onChange={this.handleChange}
          />

          <input
            type="number"
            name="value"
            placeholder="Value"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <input
            type="number"
            name="change"
            placeholder="Change (%)"
            value={this.state.change}
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    maxWidth: "400px",
    marginBottom: "20px"
  }
};

export default AssetEditor;

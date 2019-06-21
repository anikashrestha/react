import React, { Component } from 'react'
import '../src/App.css';
import { themeDark, themeLight } from './Action';
import { connect } from 'react-redux';

class Theme extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={`header ${this.props.theme.theme}`}>

        <button className="themeLight" onClick={this.props.themeLight}><p>White</p>
        </button>
        <button className="themeDark" onClick={this.props.themeDark}><p>Black</p>
        </button>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  theme : state.theme
});
const mapDispatchToProps = dispatch => ({
  themeDark: ()=>dispatch(themeDark()),
  themeLight: ()=>dispatch(themeLight())
})
export default connect(mapStateToProps,mapDispatchToProps)(Theme)
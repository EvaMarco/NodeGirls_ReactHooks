import React from 'react';
import ReactDOM from "react-dom";
import App from '../App';
import Body from '../components/Body'
import Home from '../containers/Home'
import { shallow, mount } from "enzyme";

describe('App', () => {
  it("renders", () => {
    shallow(<App />);
  });
})

describe('Body', () => {
  it("renders", () => {
    shallow(<Body />);
  });
})
describe('Home', () => {
  it("renders", () => {
    shallow(<Home />);
  });
})

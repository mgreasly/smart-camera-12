import { Component } from 'preact';
import { connect } from 'redux-zero/preact';
import {mapToProps, actions} from './store';
import Card from 'preact-material-components-mgr/Card';
import 'preact-material-components-mgr/Card/style.css';
import 'preact-material-components-mgr/Button/style.css';

class ListPage extends Component {
	render() {
        return (
            <div class="results">
                {this.props.loadingResults && <Card class="shadow-card">
                    <div class="card-media">&nbsp;</div>
                    <div class="card-text">
                        <div>
                            <h1>&nbsp;</h1>
                            <p>&nbsp;</p>
                        </div>
                        <div class="card-actions">&nbsp;</div>
                    </div>
                </Card>}
                {this.props.results.map(function(result, index) {
                    return (
                        <Card>
                            <div class="card-media"><img src={result.image} /></div>
                            <div class="card-text">
                                <div>
                                    {!result.product && <h1>Unrecognized</h1>}
                                    {result.product && <h1>{result.product.name}</h1>}
                                    <p>{result.product && result.product.description}<br/>{result.product && "$" + result.product.price}</p>
                                </div>
                                <div class="card-actions">
                                    {result.product && <Card.ActionButton class="card-action-button">Buy this</Card.ActionButton>}
                                </div>
                            </div>
                      </Card>                        
                    )
                })}
            </div>
		);
   	}
};

export default connect(mapToProps, actions)(ListPage);

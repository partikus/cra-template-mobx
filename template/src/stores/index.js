import React, {createContext, useContext} from 'react';
import {observer} from "mobx-react-lite";

import tasksStore from './Tasks';

export * from './Tasks';

export const stores = {
	tasksStore,
};

export const StoreContext = createContext(stores);

/**
 * @returns {{ tasks: tasks }}
 */
export const useStores = () => {
	return useContext(StoreContext);
};

/**
 *
 * @param {React.PassedComponent} PassedComponent
 */
export const withStores = (PassedComponent) => {
	const ObservalbeComponent = observer(PassedComponent);

	return function withStoreContext(props) {
		return <StoreContext.Consumer>
			{(stores) => (
				<ObservalbeComponent {...props} {...stores}/>
			)}
		</StoreContext.Consumer>;
	};
};

export default {
	stores,
	StoreContext,
	useStores,
	withStores,
};

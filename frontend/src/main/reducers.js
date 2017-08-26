import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import DashboardReducer from '../dashboard/dashboardReducers';
import TabReducer from '../common/tab/tabReducers';
import BillingCycleReducers from '../billingCycle/billingCyleReducers';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducers,
    form: formReducer,
    toastr: toastrReducer
});

export default rootReducer;

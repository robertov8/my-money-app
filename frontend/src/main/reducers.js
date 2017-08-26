import { combineReducers } from 'redux';

import DashboardReducer from '../dashboard/dashboardReducers';
import TabReducer from '../common/tab/tabReducers';
import BillingCycleReducers from '../billingCycle/billingCyleReducers';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducers
});

export default rootReducer;

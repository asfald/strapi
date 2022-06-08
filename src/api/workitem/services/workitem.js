'use strict';

/**
 * workitem service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workitem.workitem');

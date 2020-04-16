'use strict';

module.exports = {
  symbolIdGen: (svgPath, { prefix }) => `${prefix}${svgPath}`.replace(/[\s]/g, '-'),
  symbolCopypastaGen: (assetId) => `<LunaIcon "#${assetId}" />`,
  symbolCopypastaGenEmblem: (assetId) => `% LunaIcon "#${assetId}"`,
  inlineIdGen: (svgPath) => svgPath,
  inlineCopypastaGen: (assetId) => `<LunaIcon "${assetId}" />`,
  inlineCopypastaGenEmblem: (assetId) => `% LunaIcon "${assetId}"`,
};

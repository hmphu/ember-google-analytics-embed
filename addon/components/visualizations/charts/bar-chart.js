import BaseChartVisualization from 'ember-google-analytics-embed/components/visualizations/charts/base-chart';
import { computed } from '@ember/object';

export default BaseChartVisualization.extend({

  chartType: 'BAR',

  classNames: ['ga-embed-bar-chart'],

  visualizationOptions: computed(function() {
    return [
      // Animation
      'animation',
      // Interaction
      'enableInteractivity', 'explorer',
      // Text
      'annotations', 'title', 'titlePosition', 'titleTextStyle', 'legend', 'tooltip',
      // Axis
      'hAxes', 'hAxis', 'vAxis', 'axisTitlesPosition',
      // Style
      'backgroundColor', 'dataOpacity', 'fontSize', 'fontName',
      // Bar Style
      'bar', 'bars', 'colors', 'isStacked', 'series',
      // Sizing & Positioning
      'chartArea', 'height', 'width', 'reverseCategories', 'orientation'
    ];
  })

});

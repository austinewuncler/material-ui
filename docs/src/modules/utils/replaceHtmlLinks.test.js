import { expect } from 'chai';
import replaceHtmlLinks, {
  replaceMaterialLinks,
  replaceAPILinks,
  replaceComponentLinks,
} from './replaceHtmlLinks';
import FEATURE_TOGGLE from '../../featureToggle';

describe('replaceHtmlLinks', () => {
  it('replace material related links', () => {
    expect(
      replaceMaterialLinks(`
      <ul>
      <a href="/guides/minimizing-bundle-size/">reading this guide on minimizing bundle size</a>
      <a href="/customization/theme-components/#default-props">default props</a>
      <a data-no-markdown-link="true" tabindex="0" href="/getting-started/usage/">Get started</a>
      <li><a href="/discover-more/related-projects/">Tree view</a></li>
      </ul>
    `),
    ).to.equal(`
      <ul>
      <a href="/material/guides/minimizing-bundle-size/">reading this guide on minimizing bundle size</a>
      <a href="/material/customization/theme-components/#default-props">default props</a>
      <a data-no-markdown-link="true" tabindex="0" href="/material/getting-started/usage/">Get started</a>
      <li><a href="/material/discover-more/related-projects/">Tree view</a></li>
      </ul>
    `);
  });

  it('should not change if links have been updated', () => {
    expect(
      replaceMaterialLinks(`
      <ul>
      <a href="/material/guides/minimizing-bundle-size/">reading this guide on minimizing bundle size</a>
      <a href="/material/customization/theme-components/#default-props">default props</a>
      <a data-no-markdown-link="true" tabindex="0" href="/material/getting-started/usage/">Get started</a>
      <li><a href="/material/discover-more/related-projects/">Tree view</a></li>
      </ul>
    `),
    ).to.equal(`
      <ul>
      <a href="/material/guides/minimizing-bundle-size/">reading this guide on minimizing bundle size</a>
      <a href="/material/customization/theme-components/#default-props">default props</a>
      <a data-no-markdown-link="true" tabindex="0" href="/material/getting-started/usage/">Get started</a>
      <li><a href="/material/discover-more/related-projects/">Tree view</a></li>
      </ul>
    `);
  });

  it('replace correct component links', () => {
    expect(
      replaceComponentLinks(`
      <ul>
      <li><a href="/components/button-group/">Button Group</a></li>
      <li><a href="/components/buttons/">Buttons</a></li>
      <li><a href="/components/checkboxes/#main-content">text</a></li>
      <li><a href="/components/radio-buttons#main-content">text</a></li>
      <li><a href="/components/selects/#main-content">text</a></li>
      <li><a href="/components/switches/#main-content">text</a></li>
      <li><a href="/components/text-fields/#main-content">text</a></li>
      <li><a href="/components/avatars/#main-content">text</a></li>
      <li><a href="/components/badges/#main-content">text</a></li>
      <li><a href="/components/chips/#main-content">text</a></li>
      <li><a href="/components/dividers/#main-content">text</a></li>
      <li><a href="/components/icons/#main-content">text</a></li>
      <li><a href="/components/material-icons/#main-content">text</a></li>
      <li><a href="/components/lists/#main-content">text</a></li>
      <li><a href="/components/tables/#main-content">text</a></li>
      <li><a href="/components/tooltips/#main-content">text</a></li>
      <li><a href="/components/dialogs/#main-content">text</a></li>
      <li><a href="/components/snackbars/#main-content">text</a></li>
      <li><a href="/components/cards/#main-content">text</a></li>
      <li><a href="/components/breadcrumbs/#main-content">text</a></li>
      <li><a href="/components/drawers/#main-content">text</a></li>
      <li><a href="/components/links/#main-content">text</a></li>
      <li><a href="/components/menus/#main-content">text</a></li>
      <li><a href="/components/steppers/#main-content">text</a></li>
      <li><a href="/components/tabs/#main-content">text</a></li>
      <li><a href="/components/transitions/#main-content">text</a></li>
      <li><a href="/components/pickers/#main-content">text</a></li>
      -
      <li><a href="/components/tree-view/">Tree view</a></li>
      <li><a href="/components/data-grid/demo/">Demo</a></li>
      </ul>
    `),
    ).to.equal(`
      <ul>
      <li><a href="/material/react-button-group/">Button Group</a></li>
      <li><a href="/material/react-button/">Buttons</a></li>
      <li><a href="/material/react-checkbox/#main-content">text</a></li>
      <li><a href="/material/react-radio-button#main-content">text</a></li>
      <li><a href="/material/react-select/#main-content">text</a></li>
      <li><a href="/material/react-switch/#main-content">text</a></li>
      <li><a href="/material/react-text-field/#main-content">text</a></li>
      <li><a href="/material/react-avatar/#main-content">text</a></li>
      <li><a href="/material/react-badge/#main-content">text</a></li>
      <li><a href="/material/react-chip/#main-content">text</a></li>
      <li><a href="/material/react-divider/#main-content">text</a></li>
      <li><a href="/material/icons/#main-content">text</a></li>
      <li><a href="/material/material-icons/#main-content">text</a></li>
      <li><a href="/material/react-list/#main-content">text</a></li>
      <li><a href="/material/react-table/#main-content">text</a></li>
      <li><a href="/material/react-tooltip/#main-content">text</a></li>
      <li><a href="/material/react-dialog/#main-content">text</a></li>
      <li><a href="/material/react-snackbar/#main-content">text</a></li>
      <li><a href="/material/react-card/#main-content">text</a></li>
      <li><a href="/material/react-breadcrumbs/#main-content">text</a></li>
      <li><a href="/material/react-drawer/#main-content">text</a></li>
      <li><a href="/material/react-link/#main-content">text</a></li>
      <li><a href="/material/react-menu/#main-content">text</a></li>
      <li><a href="/material/react-stepper/#main-content">text</a></li>
      <li><a href="/material/react-tabs/#main-content">text</a></li>
      <li><a href="/material/transitions/#main-content">text</a></li>
      <li><a href="/material/pickers/#main-content">text</a></li>
      -
      <li><a href="/material/react-tree-view/">Tree view</a></li>
      <li><a href="/x/react-data-grid/demo/">Demo</a></li>
      </ul>
    `);
  });

  it('should do nothing if the components have updated', () => {
    expect(
      replaceComponentLinks(`
      <ul>
      <li><a href="/material/react-button-group/">Button Group</a></li>
      <li><a href="/material/react-button/">Buttons</a></li>
      <li><a href="/material/react-checkbox/#main-content">text</a></li>
      <li><a href="/material/react-radio-button#main-content">text</a></li>
      <li><a href="/material/react-select/#main-content">text</a></li>
      <li><a href="/material/react-switch/#main-content">text</a></li>
      <li><a href="/material/react-text-field/#main-content">text</a></li>
      <li><a href="/material/react-avatar/#main-content">text</a></li>
      <li><a href="/material/react-badge/#main-content">text</a></li>
      <li><a href="/material/react-chip/#main-content">text</a></li>
      <li><a href="/material/react-divider/#main-content">text</a></li>
      <li><a href="/material/icons/#main-content">text</a></li>
      <li><a href="/material/material-icons/#main-content">text</a></li>
      <li><a href="/material/react-list/#main-content">text</a></li>
      <li><a href="/material/react-table/#main-content">text</a></li>
      <li><a href="/material/react-tooltip/#main-content">text</a></li>
      <li><a href="/material/react-dialog/#main-content">text</a></li>
      <li><a href="/material/react-snackbar/#main-content">text</a></li>
      <li><a href="/material/react-card/#main-content">text</a></li>
      <li><a href="/material/react-breadcrumbs/#main-content">text</a></li>
      <li><a href="/material/react-drawer/#main-content">text</a></li>
      <li><a href="/material/react-link/#main-content">text</a></li>
      <li><a href="/material/react-menu/#main-content">text</a></li>
      <li><a href="/material/react-stepper/#main-content">text</a></li>
      <li><a href="/material/react-tabs/#main-content">text</a></li>
      <li><a href="/material/transitions/#main-content">text</a></li>
      <li><a href="/material/pickers/#main-content">text</a></li>
      -
      <li><a href="/material/react-tree-view/">Tree view</a></li>
      <li><a href="/x/react-data-grid/demo/">Demo</a></li>
      </ul>
    `),
    ).to.equal(`
      <ul>
      <li><a href="/material/react-button-group/">Button Group</a></li>
      <li><a href="/material/react-button/">Buttons</a></li>
      <li><a href="/material/react-checkbox/#main-content">text</a></li>
      <li><a href="/material/react-radio-button#main-content">text</a></li>
      <li><a href="/material/react-select/#main-content">text</a></li>
      <li><a href="/material/react-switch/#main-content">text</a></li>
      <li><a href="/material/react-text-field/#main-content">text</a></li>
      <li><a href="/material/react-avatar/#main-content">text</a></li>
      <li><a href="/material/react-badge/#main-content">text</a></li>
      <li><a href="/material/react-chip/#main-content">text</a></li>
      <li><a href="/material/react-divider/#main-content">text</a></li>
      <li><a href="/material/icons/#main-content">text</a></li>
      <li><a href="/material/material-icons/#main-content">text</a></li>
      <li><a href="/material/react-list/#main-content">text</a></li>
      <li><a href="/material/react-table/#main-content">text</a></li>
      <li><a href="/material/react-tooltip/#main-content">text</a></li>
      <li><a href="/material/react-dialog/#main-content">text</a></li>
      <li><a href="/material/react-snackbar/#main-content">text</a></li>
      <li><a href="/material/react-card/#main-content">text</a></li>
      <li><a href="/material/react-breadcrumbs/#main-content">text</a></li>
      <li><a href="/material/react-drawer/#main-content">text</a></li>
      <li><a href="/material/react-link/#main-content">text</a></li>
      <li><a href="/material/react-menu/#main-content">text</a></li>
      <li><a href="/material/react-stepper/#main-content">text</a></li>
      <li><a href="/material/react-tabs/#main-content">text</a></li>
      <li><a href="/material/transitions/#main-content">text</a></li>
      <li><a href="/material/pickers/#main-content">text</a></li>
      -
      <li><a href="/material/react-tree-view/">Tree view</a></li>
      <li><a href="/x/react-data-grid/demo/">Demo</a></li>
      </ul>
    `);
  });

  it('replace correct API links', () => {
    expect(
      replaceAPILinks(`
    <h2 id="heading-api"><span class="anchor-link" id="api"></span>API<a aria-labelledby="heading-api" class="anchor-link-style" href="#api" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><ul>
<li><a href="/api/button/"><code>&lt;Button /&gt;</code></a></li>
<li><a href="/api/button-base/"><code>&lt;ButtonBase /&gt;</code></a></li>
<li><a href="/api/button-unstyled/"><code>&lt;ButtonUnstyled /&gt;</code></a></li>
<li><a href="/api/icon-button/"><code>&lt;IconButton /&gt;</code></a></li>
<li><a href="/api/loading-button/"><code>&lt;LoadingButton /&gt;</code></a></li>
<li><a href="/api/data-grid/data-grid/">DataGrid</a></li>
<li><a href="/api/data-grid/data-grid-pro/">DataGridPro</a></li>
<li><a href="/system/basics/">System</a></li>
</ul>
    `),
    ).to.equal(`
    <h2 id="heading-api"><span class="anchor-link" id="api"></span>API<a aria-labelledby="heading-api" class="anchor-link-style" href="#api" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><ul>
<li><a href="/material/api/button/"><code>&lt;Button /&gt;</code></a></li>
<li><a href="/material/api/button-base/"><code>&lt;ButtonBase /&gt;</code></a></li>
<li><a href="/base/api/button-unstyled/"><code>&lt;ButtonUnstyled /&gt;</code></a></li>
<li><a href="/material/api/icon-button/"><code>&lt;IconButton /&gt;</code></a></li>
<li><a href="/material/api/loading-button/"><code>&lt;LoadingButton /&gt;</code></a></li>
<li><a href="/x/api/data-grid/data-grid/">DataGrid</a></li>
<li><a href="/x/api/data-grid/data-grid-pro/">DataGridPro</a></li>
<li><a href="/system/basics/">System</a></li>
</ul>
    `);
  });

  it('should do nothing if the APIs have updated', () => {
    expect(
      replaceAPILinks(`
      <h2 id="heading-api"><span class="anchor-link" id="api"></span>API<a aria-labelledby="heading-api" class="anchor-link-style" href="#api" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><ul>
  <li><a href="/material/api/button/"><code>&lt;Button /&gt;</code></a></li>
  <li><a href="/material/api/button-base/"><code>&lt;ButtonBase /&gt;</code></a></li>
  <li><a href="/base/api/button-unstyled/"><code>&lt;ButtonUnstyled /&gt;</code></a></li>
  <li><a href="/material/api/icon-button/"><code>&lt;IconButton /&gt;</code></a></li>
  <li><a href="/material/api/loading-button/"><code>&lt;LoadingButton /&gt;</code></a></li>
  </ul>
      `),
    ).to.equal(`
      <h2 id="heading-api"><span class="anchor-link" id="api"></span>API<a aria-labelledby="heading-api" class="anchor-link-style" href="#api" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><ul>
  <li><a href="/material/api/button/"><code>&lt;Button /&gt;</code></a></li>
  <li><a href="/material/api/button-base/"><code>&lt;ButtonBase /&gt;</code></a></li>
  <li><a href="/base/api/button-unstyled/"><code>&lt;ButtonUnstyled /&gt;</code></a></li>
  <li><a href="/material/api/icon-button/"><code>&lt;IconButton /&gt;</code></a></li>
  <li><a href="/material/api/loading-button/"><code>&lt;LoadingButton /&gt;</code></a></li>
  </ul>
      `);
  });

  it('only replace links for new routes (/material/* & /x/*)', () => {
    expect(
      replaceHtmlLinks(
        `
    <ul>
    <li><a href="/components/button-group/">Button Group</a></li>
    <li><a href="/components/buttons/">Buttons</a></li>
    <li><a href="/components/tree-view/">Tree view</a></li>
    <li><a href="/components/data-grid/demo/">Demo</a></li>
    <li><a href="/api/button/"><code>&lt;Button /&gt;</code></a></li>
    <li><a href="/api/button-base/"><code>&lt;ButtonBase /&gt;</code></a></li>
    <li><a href="/api/button-unstyled/"><code>&lt;ButtonUnstyled /&gt;</code></a></li>
    <li><a href="/api/icon-button/"><code>&lt;IconButton /&gt;</code></a></li>
    <li><a href="/api/loading-button/"><code>&lt;LoadingButton /&gt;</code></a></li>
    <li><a href="/api/data-grid/data-grid/">DataGrid</a></li>
    <li><a href="/api/data-grid/data-grid-pro/">DataGridPro</a></li>
    <li><a href="/system/basics/">System</a></li>
    <a href="/guides/minimizing-bundle-size/">reading this guide on minimizing bundle size</a>
    <a href="/customization/theme-components/#default-props">default props</a>
    <a data-no-markdown-link="true" tabindex="0" href="/getting-started/usage/">Get started</a>
    <li><a href="/discover-more/related-projects/">Tree view</a></li>
    </ul>
    `,
        '/material/react-buttons',
      ),
    ).to.equal(`
    <ul>
    <li><a href="/material/react-button-group/">Button Group</a></li>
    <li><a href="/material/react-button/">Buttons</a></li>
    <li><a href="/material/react-tree-view/">Tree view</a></li>
    <li><a href="/x/react-data-grid/demo/">Demo</a></li>
    <li><a href="/material/api/button/"><code>&lt;Button /&gt;</code></a></li>
    <li><a href="/material/api/button-base/"><code>&lt;ButtonBase /&gt;</code></a></li>
    <li><a href="/base/api/button-unstyled/"><code>&lt;ButtonUnstyled /&gt;</code></a></li>
    <li><a href="/material/api/icon-button/"><code>&lt;IconButton /&gt;</code></a></li>
    <li><a href="/material/api/loading-button/"><code>&lt;LoadingButton /&gt;</code></a></li>
    <li><a href="/x/api/data-grid/data-grid/">DataGrid</a></li>
    <li><a href="/x/api/data-grid/data-grid-pro/">DataGridPro</a></li>
    <li><a href="/system/basics/">System</a></li>
    <a href="/material/guides/minimizing-bundle-size/">reading this guide on minimizing bundle size</a>
    <a href="/material/customization/theme-components/#default-props">default props</a>
    <a data-no-markdown-link="true" tabindex="0" href="/material/getting-started/usage/">Get started</a>
    <li><a href="/material/discover-more/related-projects/">Tree view</a></li>
    </ul>
    `);
    if (FEATURE_TOGGLE.enable_system_scope) {
      expect(`<li><a href="/styles/api/">Styles</a></li>`).to.equal(
        `<li><a href="/system/styles/api/">Styles</a></li>`,
      );
    } else {
      expect(`<li><a href="/styles/api/">Styles</a></li>`).to.equal(
        `<li><a href="/styles/api/">Styles</a></li>`,
      );
    }
  });

  it('should work with json', () => {
    const json = {
      importDifference:
        'You can learn about the difference by <a href="/guides/minimizing-bundle-size/">reading this guide on minimizing bundle size</a>.',
    };
    expect(replaceHtmlLinks(JSON.stringify(json), '/material/api/')).to.equal(
      '{"importDifference":"You can learn about the difference by <a href=\\"/material/guides/minimizing-bundle-size/\\">reading this guide on minimizing bundle size</a>."}',
    );
    const json2 = {
      styleOverrides:
        'The name <code>{{componentStyles.name}}</code> can be used when providing <a href="/customization/theme-components/#default-props">default props</a> or <a href="/customization/theme-components/#global-style-overrides">style overrides</a> in the theme.',
    };
    expect(replaceHtmlLinks(JSON.stringify(json2), '/material/api/')).to.equal(
      '{"styleOverrides":"The name <code>{{componentStyles.name}}</code> can be used when providing <a href=\\"/material/customization/theme-components/#default-props\\">default props</a> or <a href=\\"/material/customization/theme-components/#global-style-overrides\\">style overrides</a> in the theme."}',
    );
  });

  it('does nothing for old routes', () => {
    expect(
      replaceHtmlLinks(
        `
      <ul>
      <li><a href="/components/button-group/">Button Group</a></li>
      <li><a href="/components/buttons/">Buttons</a></li>
      <li><a href="/components/tree-view/">Tree view</a></li>
      <li><a href="/components/data-grid/demo/">Demo</a></li>
      <a href="/guides/minimizing-bundle-size/">reading this guide on minimizing bundle size</a>
      <a href="/customization/theme-components/#default-props">default props</a>
      <a data-no-markdown-link="true" tabindex="0" href="/getting-started/usage/">Get started</a>
      <li><a href="/discover-more/related-projects/">Tree view</a></li>
      </ul>
    `,
        '/components/buttons/',
      ),
    ).to.equal(`
      <ul>
      <li><a href="/components/button-group/">Button Group</a></li>
      <li><a href="/components/buttons/">Buttons</a></li>
      <li><a href="/components/tree-view/">Tree view</a></li>
      <li><a href="/components/data-grid/demo/">Demo</a></li>
      <a href="/guides/minimizing-bundle-size/">reading this guide on minimizing bundle size</a>
      <a href="/customization/theme-components/#default-props">default props</a>
      <a data-no-markdown-link="true" tabindex="0" href="/getting-started/usage/">Get started</a>
      <li><a href="/discover-more/related-projects/">Tree view</a></li>
      </ul>
    `);
  });
});

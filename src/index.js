const theme = {
  themeName: 'dbgate-plugin-wg-theme-dark',
  themeType: 'dark',
  themeClassName: 'theme-dbgate-plugin-wg-theme-dark',
  themeCss: `       
  .theme-dbgate-plugin-wg-theme-dark {  
    --theme-font-1: #f8f8f2; /* cor principal das fontes*/
    --theme-font-2: #383942;
    --theme-font-3: #888888;
    --theme-font-4: #5a5a5a;
    --theme-font-hover: #8dcff8; /* blue-9 */
    --theme-font-link: #65b7f3; /* blue-8 */
    --theme-font-alt: #b2e58b; /* green-9 */

    --theme-bg-0: #282a36;
    --theme-bg-1: #21222c;
    --theme-bg-2: #21222c;
    --theme-bg-3: #313341;
    --theme-bg-4: #484954;
    --theme-bg-alt: #21222c;

    --theme-bg-gold: yellow; /* gold-2 */
    --theme-bg-orange: #442a11; /*orange-2 */
    --theme-bg-green: #1d3712; /* green-2 */
    --theme-bg-volcano: #441d12; /* volcano-2 */
    --theme-bg-red: #431418; /* red-2 */
    --theme-bg-blue: #15395b; /* blue-3 */
    --theme-bg-magenta: #551c3b; /* magenta-3 */

    --theme-font-inv-1: #ffffff;
    --theme-font-inv-15: #dedede;
    --theme-font-inv-2: #b3b3b3;
    --theme-font-inv-3: #808080;
    --theme-font-inv-4: #4d4d4d;

    --theme-bg-inv-1: #343746;
    --theme-bg-inv-2: #3c3c3c;
    --theme-bg-inv-3: #21222c;
    --theme-bg-inv-4: #707070;

    --theme-border: #343746;

    --theme-bg-hover: #313341;
    --theme-bg-selected: #6272a4; /* blue-3 */
    --theme-bg-selected-point: #03376e; /* blue-5 */

    --theme-bg-statusbar-inv: #191a21;
    --theme-bg-statusbar-inv-hover: #191a21;
    --theme-bg-statusbar-inv-font: #222;
    --theme-bg-statusbar-inv-bg: #ccc;
    --theme-bg-modalheader: #191a21;

    --theme-bg-button-inv: #004488;
    --theme-bg-button-inv-2: #1a5794;
    --theme-bg-button-inv-3: #346aa0;

    --theme-icon-blue: #3c9ae8;
    --theme-icon-green: #8fd460;
    --theme-icon-red: #e84749;
    --theme-icon-gold: #e8b339;
    --theme-icon-yellow: #e8d639;
    --theme-icon-magenta: #e0529c;

    --theme-icon-inv-green: #8fd460;
    --theme-icon-inv-red: #e84749;
  }
  :root {
  --dim-widget-icon-size: 55px;
  --dim-statusbar-height: 28px;
  --dim-left-panel-width: 300px;
  --dim-tabs-panel-height: 60px;
  --dim-tabs-height: 33px;
  --dim-splitter-thickness: 3px;

  --dim-visible-left-panel: 1; /* set from JS */
  --dim-content-left: calc(
    var(--dim-widget-icon-size) + var(--dim-visible-left-panel) *
      (var(--dim-left-panel-width) + var(--dim-splitter-thickness))
  );

  --dim-visible-toolbar: 0; /* set from JS */
  --dim-visible-titlebar: 0; /* set from JS */

  --dim-toolbar-height: 30px;
  --dim-toolstrip-height: 28px;
  --dim-titlebar-height: 30px;
  --dim-toolbar-top: calc(var(--dim-titlebar-height) * var(--dim-visible-titlebar));
  --dim-header-top: calc(
    var(--dim-titlebar-height) * var(--dim-visible-titlebar) + var(--dim-toolbar-height) * var(--dim-visible-toolbar)
  );
  --dim-content-top: calc(var(--dim-header-top) + var(--dim-tabs-panel-height));

  --dim-large-form-margin: 20px;
}
  .main-container{

  }
  input{
    outline:none;
    border:1px solid var(--theme-bg-inv-3) !important;
  }
  input:focus{    
    border:1px solid var(--theme-bg-selected) !important;
  }
  .buttonLike {
    outline:none;
  }
  .buttonLike:hover{
    border-color: transparent !important;
    opacity: .8 !important;
  }
  .iconbar .wrapper {
    cursor: pointer;
    height: 45px;
   
  }
  
  .iconbar .wrapper.selected .mdi,
  .iconbar .wrapper:hover .mdi
  {
    color: var( --theme-font-1);
  }
  .iconbar .mdi{    
     transition: all 300ms;
    font-size: 1.4rem !important;
    color: var(--theme-bg-selected);
  }

  /*ace_editor*/
  .ace_editor{
    font-size: 14px;
  }
  .ace_editor{
    font-family: "Fira code", 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
    background-color: var(--theme-bg-0);
  }
  .ace_gutter-layer{
    background: var(--theme-bg-0);
    border-right: 1px solid var(--theme-bg-1);
  }
  .horizontal-split-handle:hover,
  .vertical-split-handle:hover{
    background-color: var(--theme-bg-selected) !important;
  }
  .add-icon .mdi{
    color: var(  --theme-font-1);
  }

   `,
};
  
  export default {
    themes: [theme],
  };
  
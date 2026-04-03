import{a as e,n as t}from"./chunk-BneVvdWh.js";import{n,t as r}from"./iframe-BpJhpG8n.js";var i=t((()=>{})),a,o,s,c=t((()=>{a=e(n(),1),i(),o=r(),s=(0,a.forwardRef)(({className:e,disabled:t,error:n,helperText:r,hint:i,id:s,label:c,leadingSlot:l,trailingSlot:u,...d},f)=>{let p=(0,a.useId)(),m=s??p,h=n??r,[g,_]=(0,a.useState)(!1);return(0,o.jsxs)(`div`,{className:e?`tui-field-root ${e}`:`tui-field-root`,children:[(c||i)&&(0,o.jsxs)(`div`,{className:`tui-field-header`,children:[c?(0,o.jsx)(`label`,{className:`tui-field-label`,htmlFor:m,children:c}):(0,o.jsx)(`span`,{}),i?(0,o.jsx)(`span`,{className:`tui-field-hint`,children:i}):null]}),(0,o.jsxs)(`div`,{className:`tui-control-surface tui-field-shell tui-input-shell`,"data-disabled":t||void 0,"data-focused":g||void 0,"data-invalid":!!n||void 0,children:[l?(0,o.jsx)(`span`,{className:`tui-field-prefix`,children:l}):null,(0,o.jsx)(`input`,{...d,ref:f,"aria-invalid":!!n||void 0,className:`tui-input`,disabled:t,id:m,onBlur:e=>{_(!1),d.onBlur?.(e)},onFocus:e=>{_(!0),d.onFocus?.(e)}}),u?(0,o.jsx)(`span`,{className:`tui-field-suffix`,children:u}):null]}),h?(0,o.jsx)(`div`,{className:`tui-field-message`,"data-invalid":!!n||void 0,children:h}):null]})}),s.displayName=`Input`,s.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},hint:{required:!1,tsType:{name:`ReactNode`},description:``},label:{required:!1,tsType:{name:`ReactNode`},description:``},leadingSlot:{required:!1,tsType:{name:`ReactNode`},description:``},trailingSlot:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]}})),l,u,d,f,p,m,h;t((()=>{c(),l={title:`Components/Input`,component:s,tags:[`autodocs`],args:{label:`Command`,placeholder:`pnpm build`,helperText:`Use a shell command or script alias.`,leadingSlot:`~/`}},u={},d={args:{hint:`Optional`,placeholder:`grep -R "TODO" src`}},f={args:{label:`Search logs`,placeholder:`request-id:abc123`,leadingSlot:`>`,trailingSlot:`LIVE`}},p={args:{label:`API key`,placeholder:`sk-...`,error:`A valid API key is required to continue.`}},m={args:{label:`Workspace path`,value:`/usr/local/projects/terminal-ui-react`,disabled:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    hint: "Optional",
    placeholder: "grep -R \\"TODO\\" src"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search logs",
    placeholder: "request-id:abc123",
    leadingSlot: ">",
    trailingSlot: "LIVE"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "API key",
    placeholder: "sk-...",
    error: "A valid API key is required to continue."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Workspace path",
    value: "/usr/local/projects/terminal-ui-react",
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithHint`,`WithSuffix`,`Error`,`Disabled`]}))();export{u as Default,m as Disabled,p as Error,d as WithHint,f as WithSuffix,h as __namedExportsOrder,l as default};
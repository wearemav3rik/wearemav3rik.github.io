export const contentsForApex = [
    {
        id: 'section-1',
        title: 'Tabs or Spaces',
        icon: ['fas', 'map-signs'],
        description: 'Everything you need to know about how we format our code and the tools we use to ensure Code Readability.',
        lastModifiedDate: '2021-10-25',
        sections: [
            {
                id: 'item-1-1', label: '4 Spaces',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            'We will be using <b>4 spaces</b> to maximise readability of our code.' +
                            '<br/>Ideally, we want to configure our tab keybinding to type 4 spaces'
                    }
                ]
            },
            {id: 'item-1-2', label: 'Max Spaces per Line',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `For each line of code, the maximum is <b>120 spaces.</b>` +
                            `<br/>This will prevent too much horizontal scrolling when reading through each other\'s code.`
                    }
                ]
            },
            {id: 'item-1-3', label: 'Editor Config',
                elements: [
                    {
                        type: 'paragraph',
                        html: `We can manually override the <b>.editorconfig</b> file for VSCode and IntelliJ. To do so, create the following file in your project's root directory.`
                    },
                    {
                        type: 'code-block',
                        gist: '54f705da53dfe0c404b967dbe0b70964'
                    },
                ]
            },
            {id: 'item-1-4', label: 'Hotkeys',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            <h3>VS Code + Apex PMD Plugin</h3>
                            <p>For VS Code users, the hotkey is <b>Ctrl + Shift + F</b> while on the Apex class file.</p>
                            <p>Another method is to <b>Cmd + Shift + P</b> and choose Format Document.</p>
                            <br/>
                            <h3>IntelliJ + IlluminatedCloud</h3>
                            <p>For IntelliJ, the hotkey is <b>Cmd + Option + L</b> while on the Apex class file.</p>
                            <p>Another method is to go to <b>Menu Bar > Code > Reformat Code.</b></p>
                        `
                    }
                ]
            },
        ],
    },
    {
        id: 'section-2',
        title: 'Naming Convention',
        icon: ['fas', 'arrow-down'],
        description: 'Naming variables, classes and methods can be tedious but we make sure that our naming conventions address the meaning of the feature.',
        lastModifiedDate: '2021-10-25',
        sections: [
            {id: 'item-2-1', label: 'Class Names',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            <ol type="1">
                                <li>Naming our classes should be in <b>Pascal Case</b>.</li>
                                <li>It should also begin with an <b>Upper case</b> character.</li>
                                <li>Special characters should be avoided such as <b>Dash -</b> or <b>Underscore _</b>.</li>
                                <li>The maximum length is <b>40 characters</b>.</li>
                            </ol>
                        `
                    },
                    {
                        type: 'callout-block',
                        blockType: 'success',
                        label: 'Correct',
                        html: `
                            <br/>
                            <ul style="list-style-type:none;">
                                <li>AccountController</li>
                                <li>AccountControllerTest</li>
                                <li>TestDataFactory</li>
                                <li>ContactUpdateBatch</li>
                            </ul>
                        `
                    },
                    {
                        type: 'callout-block',
                        blockType: 'danger',
                        label: 'Incorrect',
                        html: `
                            <br/>
                            <ul style="list-style-type:none;">
                                <li>Account_Controller</li>
                                <li>Account_Controller_Test</li>
                                <li>AccountController_Test</li>
                                <li>accountController</li>
                                <li>Test_Data_Factory</li>
                                <li>TestData_Factory</li>
                                <li>Testdatafactory</li>
                                <li>Contact_Update_Batch</li>
                                <li>ContactUpdate_Batch</li>
                                <li>contactupdatebatch</li>
                            </ul>
                        `
                    }
                ]
            },
            {id: 'item-2-2', label: 'Class Methods',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            <ol type="1">
                                <li>Naming our class methods should be in <b>Camel Case</b>.</li>
                                <li>It should also begin with a <b>Lower case</b> character.</li>
                                <li>Special characters should be avoided such as <b>Dash -</b> or <b>Underscore _</b>.</li>
                            </ol>
                        `
                    },
                    {
                        type: 'callout-block',
                        blockType: 'success',
                        label: 'Correct',
                        html: `
                            <br/>
                            <ul style="list-style-type:none;">
                                <li>getAllAccounts</li>
                                <li>findAllAccountsWithActivities</li>
                            </ul>
                        `
                    },
                    {
                        type: 'callout-block',
                        blockType: 'danger',
                        label: 'Incorrect',
                        html: `
                            <br/>
                            <ul style="list-style-type:none;">
                                <li>get_All_Accounts</li>
                                <li>get_AllAccounts</li>
                                <li>GetAllAccounts</li>
                                <li>GETALLACCOUNTS</li>
                                <li>getallaccounts</li>
                                <li>FindAllAccountsWithActivities</li>
                                <li>find-All-Accounts-With-Activities</li>
                                <li>find-all-accounts-with-activities</li>
                                <li>findAllAccountsW/Activities</li>
                            </ul>
                        `
                    }
                ]
            },
            {id: 'item-2-3', label: 'Mutable Variables (Non-Final)',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            <ol type="1">
                                <li>Naming our mutable variables should be in <b>Camel Case</b>.</li>
                                <li>It should also begin with a <b>Lower case</b> character.</li>
                                <li>Special characters should be avoided such as <b>Dash -</b> or <b>Underscore _</b>.</li>
                                <li>Avoid single letter variable names.</li>
                            </ol>
                        `
                    },
                    {
                        type: 'callout-block',
                        blockType: 'success',
                        label: 'Correct',
                        html: `
                            <br/>
                            <ul style="list-style-type:none;">
                                <li>String accountName = 'Lorem Ipsum';</li>
                                <li>Integer numberWhichWillBeIncremented = 1;</li>
                                <li>Boolean isActivated = true;</li>
                                <li>for (List<Account> account : accounts) {}</li>
                                <li>for (List<Account> acct : accounts) {}</li>
                            </ul>
                        `
                    },
                    {
                        type: 'callout-block',
                        blockType: 'danger',
                        label: 'Incorrect',
                        html: `
                            <br/>
                            <ul style="list-style-type:none;">
                                <li>String AccountName = 'Lorem Ipsum';</li>
                                <li>String ACCOUNTNAME = 'Lorem Ipsum';</li>
                                <li>String ACCOUNT_NAME = 'Lorem Ipsum';</li>
                                <li>String a = 'Lorem Ipsum';</li>
                                <li>Integer NumberWhichWillBeIncremented = 1;</li>
                                <li>Integer number_Which_Will_Be_Incremented = 1;</li>
                                <li>Integer n = 1;</li>
                                <li>Boolean is_Activated = true;</li>
                                <li>Boolean i = true;</li>
                            </ul>
                        `
                    }
                ]
            },
            {id: 'item-2-4', label: 'Immutable Variables (Final)',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            <ol type="1">
                                <li>Naming our mutable variables should be in <b>Snake Case</b>.</li>
                                <li>It should also <b>All Upper Case</b> character.</li>
                                <li>Avoid single letter variable names.</li>
                            </ol>
                        `
                    },
                    {
                        type: 'callout-block',
                        blockType: 'success',
                        label: 'Correct',
                        html: `
                            <br/>
                            <ul style="list-style-type:none;">
                                <li>final String PAGE_LONG_DESCRIPTION = 'Lorem Ipsum';</li>
                                <li>final Integer BATCH_LIMIT = 50;</li>
                                <li>final Boolean ENABLE_LOG_EXCEPTION = true;</li>
                            </ul>
                        `
                    },
                    {
                        type: 'callout-block',
                        blockType: 'danger',
                        label: 'Incorrect',
                        html: `
                            <br/>
                            <ul style="list-style-type:none;">
                                <li>final String PAGELONGDESCRIPTION = 'Lorem Ipsum';</li>
                                <li>final String lagelongdescription = 'Lorem Ipsum';</li>
                                <li>final Integer batchLimit = 50;</li>
                                <li>final Integer BatchLimit = 50;</li>
                                <li>final Boolean ENABLELOG_EXCEPTION = true;</li>
                                <li>final Boolean enable_log_exce[topm] = true;</li>
                                <li>final A = 1;</li>
                                <li>final B = true;</li>
                            </ul>
                        `
                    }
                ]
            },
        ]
    },
    {
        id: 'section-3',
        title: 'Trigger Handler Interface',
        icon: ['fas', 'box'],
        description: 'The trigger handler interface we use to maximise trigger performance and provide uniformity across trigger patterns.',
        lastModifiedDate: '2021-10-25',
        sections: [
            {id: 'item-3-1', label: 'Which Trigger Handler Interface?'},
            {id: 'item-3-2', label: 'Naming Convention'},
            {id: 'item-3-3', label: 'An example trigger handler: ExampleTriggerHandler'},
            {id: 'item-3-4', label: 'Accessing Lists'},
            {id: 'item-3-4', label: 'Accessing Maps'},
        ]
    },
    {
        id: 'section-4',
        title: 'Trigger Pattern',
        icon: ['fas', 'cogs'],
        description: 'We always want our triggers to be lean and minimalistic. Learn how we declare our triggers in coordination with our Trigger Handler Interface.',
        lastModifiedDate: '2021-10-25',
        sections: [
            {id: 'item-4-1', label: 'Naming Convention'},
            {id: 'item-4-2', label: 'ExampleTrigger'},
            {id: 'item-4-3', label: 'Custom Metadata Toggle On/Off'},
        ]
    },
    {
        id: 'section-5',
        title: 'Query Builder Interface',
        icon: ['fas', 'tools'],
        description: 'The SOQL interface we use for dynamically querying Standard and Custom Salesforce Objects.',
        lastModifiedDate: '2021-10-25',
        sections: [
            {id: 'item-5-1', label: 'Which Query Builder Interface?'},
        ]
    },
    {
        id: 'section-6',
        title: 'Apex Security Pattern',
        icon: ['fas', 'laptop-code'],
        description: 'Learn about the security patterns we use to ensure we are adhering to the Sharing Model and Field Level Security.',
        lastModifiedDate: '2021-10-25',
        sections: [
            {id: 'item-6-1', label: 'Enforcing Row Level Security'},
            {id: 'item-6-2', label: 'Enforcing Object and Field Permissions'},
            {id: 'item-6-3', label: 'WITH SECURITY_ENFORCED'},
            {id: 'item-6-4', label: 'Schema.DescribeSObjectResult and Schema.DescribeFieldResult'},
            {id: 'item-6-5', label: 'Security.stripInaccessible'},
        ]
    },
    {
        id: 'section-7',
        title: 'Accessing Record Types',
        icon: ['fas', 'tablet-alt'],
        description: 'We like to access our record types without the need for extra queries.',
        lastModifiedDate: '2021-10-25',
        sections: [
            {id: 'item-7-1', label: 'Example on Standard Object Account'},
            {id: 'item-7-2', label: 'Example on Custom Object Some_Object__c'},
        ]
    },
    {
        id: 'section-8',
        title: 'Writing Tests',
        icon: ['fas', 'book-reader'],
        description: 'Writing tests is not just about Code Coverage. Our patterns ensure that we have considered both positive and negative scenarios of a feature.',
        lastModifiedDate: '2021-10-25',
        sections: [
            {id: 'item-8-1', label: 'Basic Test Patterns'},
            {id: 'item-8-2', label: 'Positive Test'},
            {id: 'item-8-3', label: 'Negative Test'},
            {id: 'item-8-4', label: 'Null Test'},
            {id: 'item-8-5', label: 'Empty Test'},
        ]
    },
    {
        id: 'section-9',
        title: 'Apex Docs and Commenting',
        icon: ['fas', 'lightbulb'],
        description: 'Our code will always be ready to generate Apex Docs. Comments also help us track changes.',
        lastModifiedDate: '2021-10-25',
        sections: [
            {id: 'item-9-1', label: 'Class Comments'},
            {id: 'item-9-2', label: 'Class Method Comments'},
            {id: 'item-9-3', label: 'Useful plugins for Apex Docs'},
        ]
    },
];
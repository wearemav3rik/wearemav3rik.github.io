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
                            'We will be using <strong>4 spaces</strong> to maximise readability of our code.' +
                            '<br/>Ideally, we want to configure our tab keybinding to type 4 spaces'
                    }
                ]
            },
            {id: 'item-1-2', label: 'Max Spaces per Line',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `For each line of code, the maximum is <strong>120 spaces.</strong>` +
                            `<br/>This will prevent too much horizontal scrolling when reading through each other\'s code.`
                    }
                ]
            },
            {id: 'item-1-3', label: 'Editor Config',
                elements: [
                    {
                        type: 'paragraph',
                        html: `We can manually override the <strong>.editorconfig</strong> file for VSCode and IntelliJ. To do so, create the following file in your project's root directory.`
                    },
                    {
                        type: 'code-block',
                        gist: '54f705da53dfe0c404b967dbe0b70964'
                    },
                ]
            },
            {id: 'item-1-4', label: 'Formatting Code',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            <h3>VS Code + Apex PMD Plugin</h3>
                            <p>For VS Code users, the hotkey is <strong>Ctrl + Shift + F</strong> while on the Apex class file.</p>
                            <p>Another method is to <strong>Cmd + Shift + P</strong> and choose Format Document.</p>
                            <br/>
                            <h3>IntelliJ + IlluminatedCloud</h3>
                            <p>For IntelliJ, the hotkey is <strong>Cmd + Option + L</strong> while on the Apex class file.</p>
                            <p>Another method is to go to <strong>Menu Bar > Code > Reformat Code.</strong></p>
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
                                <li>Naming our classes should be in <strong>Pascal Case</strong>.</li>
                                <li>It should also begin with an <strong>Upper case</strong> character.</li>
                                <li>Special characters should be avoided such as <strong>Dash -</strong> or <strong>Underscore _</strong>.</li>
                                <li>The maximum length is <strong>40 characters</strong>.</li>
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
                                <li>Naming our class methods should be in <strong>Camel Case</strong>.</li>
                                <li>It should also begin with a <strong>Lower case</strong> character.</li>
                                <li>Special characters should be avoided such as <strong>Dash -</strong> or <strong>Underscore _</strong>.</li>
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
                                <li>Naming our mutable variables should be in <strong>Camel Case</strong>.</li>
                                <li>It should also begin with a <strong>Lower case</strong> character.</li>
                                <li>Special characters should be avoided such as <strong>Dash -</strong> or <strong>Underscore _</strong>.</li>
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
                                <li>Naming our mutable variables should be in <strong>Snake Case</strong>.</li>
                                <li>It should also <strong>All Upper Case</strong> character.</li>
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
        lastModifiedDate: '2021-10-26',
        sections: [
            {id: 'item-3-1', label: 'Which Trigger Handler Interface?',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            We will use the following Trigger interface for our projects:<br/>
                            <a href="https://github.com/kevinohara80/sfdc-trigger-framework/tree/master/src/classes" target="_blank" rel="noopener noreferrer">sfdc-trigger-framework</a>
                        `
                    }
                ]
            },
            {id: 'item-3-2', label: 'Naming Convention',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            If the Object is called <strong>Example</strong>, we will use the class name <strong>ExampleTriggerHandler</strong>.
                        `
                    }
                ]
            },
            {id: 'item-3-3', label: 'ExampleTriggerHandler',
                elements: [
                    {
                        type: 'code-block',
                        gist: '84a107182a0478e4273b80b3c1f73a8b'
                    }
                ]
            },
            {id: 'item-3-4', label: 'Accessing Lists',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            Using Lists from an Account Trigger Handler
                        `
                    },
                    {
                        type: 'code-block',
                        gist: '0b87c06897c1e3dfdbed8a37d6bfe41a'
                    }
                ]
            },
            {id: 'item-3-4', label: 'Accessing Maps',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            Using Maps from an Account Trigger Handler
                        `
                    },
                    {
                        type: 'code-block',
                        gist: 'ccc37a369573cdea163e6644cbf7e14d'
                    }
                ]
            },
        ]
    },
    {
        id: 'section-4',
        title: 'Trigger Pattern',
        icon: ['fas', 'cogs'],
        description: 'We always want our triggers to be lean and minimalistic. Learn how we declare our triggers in coordination with our Trigger Handler Interface.',
        lastModifiedDate: '2021-10-26',
        sections: [
            {id: 'item-4-1', label: 'Naming Convention',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            If the Object is called <strong>Example</strong>, we will use the class name <strong>ExampleTrigger</strong>.
                        `
                    }
                ]
            },
            {id: 'item-4-2', label: 'ExampleTrigger',
                elements: [
                    {
                        type: 'code-block',
                        gist: 'dbd648fdc78fb479f50af762741af4e8'
                    }
                ]
            },
            {id: 'item-4-3', label: 'Using AccountTriggerHandler with AccountTrigger',
                elements: [
                    {
                        type: 'code-block',
                        gist: '2663491ccd689d417b41f135f204c446'
                    }
                ]
            },
            {id: 'item-4-4', label: 'Custom Metadata Toggle On/Off',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            TBD
                        `
                    }
                ]
            },
        ]
    },
    {
        id: 'section-5',
        title: 'Query Builder Interface',
        icon: ['fas', 'tools'],
        description: 'The SOQL interface we use for dynamically querying Standard and Custom Salesforce Objects.',
        lastModifiedDate: '2021-10-26',
        sections: [
            {id: 'item-5-1', label: 'Which Query Builder Interface?',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            We will use the following Query Builder interface for our projects:<br/>
                            <a href="https://github.com/4an70m/apex-query-builder" target="_blank" rel="noopener noreferrer">apex-query-builder</a>
                        `
                    }
                ]
            },
            {id: 'item-5-2', label: 'Link to Query Builder classes',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            We will use the following Query Builder interface for our projects:<br/>
                            <a href="https://github.com/4an70m/apex-query-builder/tree/master/src/classes" target="_blank" rel="noopener noreferrer">apex-query-builder classes</a>
                        `
                    }
                ]
            },
        ]
    },
    {
        id: 'section-6',
        title: 'Apex Security Pattern',
        icon: ['fas', 'laptop-code'],
        description: 'Learn about the security patterns we use to ensure we are adhering to the Sharing Model and Field Level Security.',
        lastModifiedDate: '2021-10-26',
        sections: [
            {id: 'item-6-1', label: 'Enforcing Row Level Security',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            To enforce row level security on objects within Apex classes, we first need to know if the Apex class is querying any Objects.<br/>
                            If our Apex Class is performing a query, Row level security should always be enforced.<br/><br/>    
                            Apex classes such as utility classes which do not perform queries do not need row level security.
                        `
                    },
                    {
                        type: 'callout-block',
                        blockType: 'danger',
                        label: 'Incorrect',
                        html: `
                            The example below does not enforce row level security
                        `
                    },
                    {
                        type: 'code-block',
                        gist: 'e07a22c60eb7145313ebc204a7f69218'
                    },
                    {
                        type: 'callout-block',
                        blockType: 'success',
                        label: 'With Sharing Rules',
                        html: `
                            The example below implements a class with enabled sharing rules
                        `
                    },
                    {
                        type: 'code-block',
                        gist: 'f01fb0ac224f9dd48c14cd89eea6ba59'
                    },
                    {
                        type: 'callout-block',
                        blockType: 'success',
                        label: 'Without Sharing Rules',
                        html: `
                            The example below implements a class with disabled sharing rules
                        `
                    },
                    {
                        type: 'code-block',
                        gist: '1aadea49a843aad87d762280039f47fd'
                    },
                    {
                        type: 'callout-block',
                        blockType: 'success',
                        label: 'Apex Classes without SOQL Queries do not need Sharing to be defined',
                        html: `
                            The example below implements a class without sharing enforcement but it is ok as it does not have any SOQL queries which need to be governed by sharing rules
                        `
                    },
                    {
                        type: 'code-block',
                        gist: '4b39b0d32b041bcb495eadd351acc947'
                    }
                ]
            },
            {id: 'item-6-2', label: 'Enforcing Object and Field Permissions',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            By default, apex doesn't enforce object or field-level permissions. Salesforce offers 3 different ways to verify access and how to ensure your Apex security requirements are met.
                            <br/>
                            <ol type="1">
                                <li><strong>WITH SECURITY_ENFORCED</strong> - provides security as a clause on SOQL queries.</li>
                                <li><strong>DescribeFieldResult</strong> - provides the <strong><em>isAccessible</em></strong>, <strong><em>isCreateable</em></strong>, or <strong><em>isUpdateable</em></strong> methods.</li>
                                <li><strong>Security</strong> provides the <strong><em>stripInaccessible</em></strong> method.</li>
                            </ol>
                            <br/>
                            Reference: <a href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_chapter.htm" target="_blank" rel="noopener noreferrer">Apex Security and Sharing</a>
                        `
                    },
                ]
            },
            {id: 'item-6-3', label: 'SOQL with Enforced Security',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            The first option to verify object and field permission is WITH <strong>SECURITY_ENFORCED</strong> keyword on SOQL query.<br/>
                            This will raise an exception if SOQL tries to access something that's not accessible to the user.
                        `
                    },
                    {
                        type: 'callout-block',
                        blockType: 'warning',
                        label: 'Important',
                        html: `
                            Insert the <strong>SECURITY_ENFORCED</strong> keyword:
                            <ul>
                                <li>After the WHERE or FROM clause.</li>
                                <li>Before ORDER BY, LIMIT, OFFSET or any aggregate function.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'code-block',
                        gist: '57239c4b13a728a8af1de014bb42be05'
                    }
                ]
            },
            {id: 'item-6-4', label: 'Security using DescribeSObjectResult and DescribeFieldResult',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            This method verifies permissions using DescribeSObjectResult and DescribeFieldResult. Before performing any DML operation,<br/>
                            call any of these methods <strong>isAccessible</strong>, <strong>isCreateable</strong>, or <strong>isUpdateable</strong> to verify if the user has required access. This option is CPU intensive.
                        `
                    },
                    {
                        type: 'code-block',
                        gist: '4124525f1f18e7f33db1d5b7de451ab8',
                        label: 'Read Access'
                    },
                    {
                        type: 'code-block',
                        gist: '33f6a4fc0021ab1e4ff400460f8d1575',
                        label: 'Create Access'
                    },
                    {
                        type: 'code-block',
                        gist: '925efb34f346a515e4cb46f25e853f16',
                        label: 'Update Access'
                    }

                ]
            },
            {id: 'item-6-5', label: 'Security using stripInaccessible',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            This method verifies permissions using DescribeSObjectResult and DescribeFieldResult. Before performing any DML operation,<br/>
                            call any of these methods <strong>isAccessible</strong>, <strong>isCreateable</strong>, or <strong>isUpdateable</strong> to verify if the user has required access. This option is CPU intensive.
                            This option was recently introduced by Salesforce to verify user permission.

                            This method can be used to strip the fields and relationship fields from query and sub-query results which the user does not have<br/>
                            access to. All inaccessible objects and fields will be removed before DML operations. Salesforce recommends using this method to verify<br/>
                            user access.
                            <ul>
                                <li>Class: Security.stripInaccessible</li>
                                <li>
                                    Supported Access Types:
                                    <ul>
                                        <li>CREATABLE</li>
                                        <li>READABLE</li>
                                        <li>UPDATABLE</li>
                                        <li>UPSERTABLE</li>
                                    </ul>
                                </li>
                            </ul>
                        `
                    },
                    {
                        type: 'code-block',
                        gist: '0e76c32e2109c5dfd81a6e99fc3dac8f',
                        label: 'Read stripInaccessible'
                    },
                    {
                        type: 'code-block',
                        gist: '6f76e3b37ea3e4a581fef226dde38206',
                        label: 'Create stripInaccessible'
                    },
                    {
                        type: 'code-block',
                        gist: 'ebfdbea1e95efcae5f4de28fcbf0d9b4',
                        label: 'Update stripInaccessible'
                    },
                    {
                        type: 'code-block',
                        gist: 'aa94880410e114fc795a597aca1190be',
                        label: 'Upsert stripInaccessible'
                    }
                ]},
        ]
    },
    {
        id: 'section-7',
        title: 'Accessing Record Types',
        icon: ['fas', 'tablet-alt'],
        description: 'We like to access our record types without the need for extra queries.',
        lastModifiedDate: '2021-10-26',
        sections: [
            {id: 'item-7-1', label: 'Example on Standard Object Account',
                elements: [
                    {
                        type: 'code-block',
                        gist: 'cfb4218df0801c939d8715a90da379fe',
                    },
                ]
            },
            {id: 'item-7-2', label: 'Example on Custom Object Some_Object__c',
                elements: [
                    {
                        type: 'code-block',
                        gist: '9ff76e652b426c8dd5427fd645bdda5d',
                    },
                ]
            },
        ]
    },
    {
        id: 'section-8',
        title: 'Writing Tests',
        icon: ['fas', 'book-reader'],
        description: 'Writing tests is not just about Code Coverage. Our patterns ensure that we have considered both positive and negative scenarios of a feature.',
        lastModifiedDate: '2021-10-26',
        sections: [
            {id: 'item-8-1', label: 'Basic Test Patterns',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            We want to be testing for Positive, Negative, Null and Empty scenarios as much as possible. For the purpose of this example, let's say the method I am testing is:
                        `
                    },
                    {
                        type: 'code-block',
                        gist: '67b7097f2cf809e933b2669f9df5658e',
                    }
                ]
            },
            {id: 'item-8-2', label: 'Positive Test',
                elements: [
                    {
                        type: 'code-block',
                        gist: 'db3274cd65125c4a36ff52730218604a',
                    }
                ]
            },
            {id: 'item-8-3', label: 'Negative Test',
                elements: [
                    {
                        type: 'code-block',
                        gist: 'f34fd9fc32d85264f5d8ba8e6e959f5d',
                    }
                ]
            },
            {id: 'item-8-4', label: 'Empty Test',
                elements: [
                    {
                        type: 'code-block',
                        gist: '283128797edfaa601be672853c6eb54f',
                    }
                ]
            },
            {id: 'item-8-5', label: 'Null Test',
                elements: [
                    {
                        type: 'code-block',
                        gist: '57584bd5578627396b3f06fcfcc892a6',
                    }
                ]
            },
        ]
    },
    {
        id: 'section-9',
        title: 'Apex Docs and Commenting',
        icon: ['fas', 'lightbulb'],
        description: 'Our code will always be ready to generate Apex Docs. Comments also help us track changes.',
        lastModifiedDate: '2021-10-26',
        sections: [
            {id: 'item-9-1', label: 'Learn about Apex Docs',
                elements: [
                    {
                        type: 'paragraph',
                        html: `
                            We will be using the conventions set by ApexDocs so we can generate them as needed<br/>
                            To learn more about ApexDocs, visit <a href="https://github.com/SalesforceFoundation/ApexDoc" target="_blank" rel="noopener noreferrer">SalesforceFoundation/ApexDoc</a>.
                        `
                    }
                ]
            },
            {id: 'item-9-2', label: 'Class Comments',
                elements: [
                    {
                        type: 'code-block',
                        gist: '8ab5d61d97393c2a20f0df9c4ebff875',
                    }
                ]
            },
            {id: 'item-9-3', label: 'Class Method Comments',
                elements: [
                    {
                        type: 'code-block',
                        gist: '0b50a9a119afd6530dd28650df833ea2',
                    }
                ]
            },
            {id: 'item-9-4', label: 'Useful plugins for Apex Docs',
                elements: [
                    {
                        type: 'callout-block',
                        blockType: 'info',
                        label: 'This list will be updated overtime, but here are some useful ones:',
                        html: `
                            <ul style="list-style-type:none;">
                                <li>
                                    <a href="https://marketplace.visualstudio.com/items?itemName=HugoOM.sfdx-autoheader" target="_blank" rel="noopener noreferrer">
                                    Salesforce Documenter for VSCode 
                                    </a>
                                </li>
                            </ul>
                        `
                    },
                ]
            },
        ]
    },
];